---
slug: staying-fresh-with-freshness-tables
title: Staying Fresh with Freshness Tables
---


# Data freshness is important. Really important.

Without freshness, why should anyone trust you or your systems? Why should they pay your company money or take your recommendations and "science" seriously? Why should they spend their time building on your systems or data warehouse?

<!--truncate-->

# But Freshness is Really Hard.


Data warehouses store data... of different shapes and sizes.... sourced from different places... at different frequencies... and modeled in different ways. It's the data team's job to make that process transparent, reliable, and understandable.

As the use of data ramps in an organization (often rapidly), conversations tend to go from the initial 🤯🙌😮 to "how quickly is my data loaded?".

### All-too-familiar questions look something like this:

**How often do we load our Postgres instances?**

"Every fifteen minutes."

**How about logs?**

"Daily."

**We have an event stream right?**

"Of course! Events land in Snowflake every three minutes."

**How about the Salesforce and Hubspot integrations?**

"Hubspot is loaded hourly. We ran into API limits with Salesforce so that's loaded every few hours. Less often if we exceed quotas and the retries kick in."

**Did we ever start loading Greenhouse? I want to dig into hiring funnels.**

"Sure did. Applications, candidates, stages, scorecards are all loaded twice per day. Rejection reasons are once per day."

**What about our client data feeds?**

"We grab them as often as we can, but most land on Thursday or Friday. And they never come in on the weekend. Manually-curated ones always go dark in December."

**This is great. How about our DBT models?**

"Table materializations are run twice per day. Incremental models run every hour. Our views pass-through to the source tables, so they are as fresh as the source tables."

"But we manually refresh the materialized views with Airflow every thirty minutes..."

"And we are playing with Materialize on Kafka, so that's usually within a few hundred ms..."

"And there are couple Snowflake tasks..."

*....and the list goes on.*

This conversation quickly grows as teams, data sources, technologies, data models, and stakeholder value grows. Engineers who were once thrilled to build new systems quickly become burdened by all the freshness. Managers who were once able to recruit and onboard team members or advance initiatives become the context bottleneck. "Ms. Manager, is this table fresh? How about this one? How often can I expect data to be here?"

# Measuring Freshness with Record-Level Metadata is OK.

Once upon a time database people kept track of record-level metadata with createdAt, updatedAt, and deletedAt columns. And fun stuff like database triggers, functions, audit tables, chewing on the WAL, whatever.

This is all dandy! But only for the source database.

So data warehouse people added "warehouse" or "system" record-level metadata columns: "_updated_at", "dw_updated_at", "_loaded_at", "fivetran_synced" and the like. Sprinkle in some column defaults and you're well on your way.

[Stitch](https://www.stitchdata.com/docs/replication/loading/system-tables-columns) and [Fivetran](https://fivetran.com/docs/getting-started/system-columns-and-tables) do this. It works! Querying "select max(fivetran_synced)" for all tables lets you quickly see the last time they were loaded. **Fresh.**

DBT uses [Freshness Checks](https://docs.getdbt.com/reference/resource-properties/freshness) to "select max(loaded_at)" sources. And provides a handy Source Freshness UI to give a visual representation of source status. **Definitely fresh.**

***But there are some downsides to all this freshness. Especially in columnar databases.***

As tables grow in size a "select max(loaded_at)" is super wasteful. These tables are rarely partitioned or clustered on load-metadata columns. And if tables are initially clustered by "loaded at", they probably won't be for very long. Freshness checks will therefore be less efficient (and slower) as the table gets larger, and you will spend more and more money trying to figure out how fresh things are. With limited success. **Not fresh.**

If you're using BigQuery, each freshness check will use a job slot. Which is ok, until you scale. Or have more people checking dashboards. Or run things more frequently. A freshness check that accelerates your systems bouncing off BigQuery concurrency limits is not fresh. Batch Priority freshness checks? **Not fresh!**

If you're using Redshift, each freshness check will steal resources that could and should be used to load, model, and serve data. **A freshness check that requires WLM tuning is definitely not fresh.**

If freshness checks are being executed with Airflow sensors, I'm going to conveniently avoid the subject. **It's not fresh.**

And last but certainly not least: just because a table was loaded at T1 doesn't mean it was entirely up to date at that time. **Fresh? Maybe. But also maybe not.**

# Measuring Freshness with Freshness Tables is Fresh.

While certainly important and useful, record-level metadata columns are not always awesome. They certainly serve a purpose but freshness tables are better.

Freshness tables are not complicated and could look as simple as this:

```
metadata=# \d freshness.tbl_freshness
                                               Table "freshness.tbl_freshness"
        Column        |           Type           | Collation | Nullable |                       Default
----------------------+--------------------------+-----------+----------+-----------------------------------------------------
 id                   | integer                  |           | not null | nextval('freshness.tbl_freshness_id_seq'::regclass)
 fresh_at             | timestamp with time zone |           | not null |
 fqn                  | text                     |           | not null |
 table_catalog        | text                     |           | not null |
 table_schema         | text                     |           | not null |
 table_name           | text                     |           | not null |
 system               | text                     |           | not null |
 job_started_at       | timestamp with time zone |           | not null |
 job_ended_at         | timestamp with time zone |           | not null |
 job_duration_seconds | double precision         |           | not null |
 highwater_start      | timestamp with time zone |           | not null |
 highwater_end        | timestamp with time zone |           | not null |


Indexes:
    "tbl_freshness_catalog_idx" btree (table_catalog)
    "tbl_freshness_fresh_at_idx" btree (fresh_at)
    "tbl_freshness_schema_idx" btree (table_schema)
    "tbl_freshness_table_idx" btree (table_name)
```

Source freshness is definitely cool. But what about freshness at all other stages of the data dependency graph? What about staging, base/intermediary/backroom model, fact, dim/scd, and presentation-layer freshness? What about data application freshness, or the master data tier? What about scheduled query freshness?

What about your metrics tier?

Measuring freshness across the entire graph is super important. Freshness tables let you do exactly that.


# How To Be Fresh

### Track It.

Freshness is hard but tracking freshness doesn't have to be. And you'll have to start somewhere.

It is not a great feat of engineering to collect metadata within ingestion systems and persist that meta after each load iteration. Load instrumentation is fresh (and you should probably be doing it anyways).

It's pretty easy to add [post-hooks](https://docs.getdbt.com/reference/resource-configs/pre-hook-post-hook) to DBT models. Calculating and persisting data model freshness is fresh.

Refreshing a materialized view? Add a "INSERT INTO metadata.tbl_freshness values (select something interesting)" line to the end of the statement, wrap it in a transaction, and voila. Instafresh. (And you might have [this already](https://docs.snowflake.com/en/sql-reference/functions/materialized_view_refresh_history.html).)


Use Airflow to manage data ingestion and transformation? Great! The power of [on_success_callback](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.Base) and [context](https://composed.blog/airflow/execute-context) is already yours. Fresh.

At a loss for how to track freshness? Even a webhook-to-freshness-table can be fresh!

### Rock It.

Believe it or not, many analysts and downstream engineers will self-service if they have low-friction ways for doing so.

Unfortunately they usually have to go to N different places, where N is the number of sources or systems in operation. Requiring stakeholders to know data systems inside-and-out, and requiring them to waste their time tracking down architectural decisions, is not fresh.

Freshness tables give people who are good at analytics the capability to do analytics on their insights. Meta? Yup. Powerful? Also yup. Efficient? Definitely.

My current employer has a single table of 31,630,551 freshness records, across thousands of distinct table FQN's and hundreds of sources. We know exactly when our data assets were historically fresh. We also know various platform upgrades successfully decreased time to insight, and which sources or data transformations were most impacted by those upgrades.

Ingestion and modeling systems currently persist freshness at a rate of ~10,000 records every hour, and we have several Tableau dashboards for tracking freshness deltas across categories.

Load and modeling optimizations are quickly surfaced, and the freshness feedback loop is on autopilot. It's fresh. And we rock it.

# Why Be Fresh?

### Freshness is the goal.

Historical data is good, but fresh data is better. Especially when it is being used to make relevant, time-sensitive decisions. Known-and-communicated-fresh data? The best!

### Freshness is trust.

When you're fresh and you can prove it, you retain significant trust. When you're fresh and others can prove it for you, it's even better. Freshness tables exposed to stakeholders allows them to tell you you're fresh (or otherwise).

### Freshness is seeing systems get better or worse. And learning fast.

Data systems are complex, and the most important thing you can do when building complex systems is provide visibility into them. When anyone can debug history at any point in time, it's fresh. When you can prove, using historical freshness data, that engineering work is decreasing time to insight, it's fresh.

When you can see freshness getting worse as volume increases, new systems come online, or new platform requirements get added, it's fresh. When you can alert on freshness thresholds...... you get the idea.

### Freshness is empowering.

If it's not clear by now, knowing what systems are doing and what tables are fresh is incredibly empowering. It enables work prioritization, continuous system insights, proactive solutions, and innovation. Freshness facilitates data SLO's and SLA's, helps frame conversations around a common point of reference, and a whole lot more.

# Use Freshness To Keep Getting Fresh[r].

After seeing the past 6-7 months of freshness data I cannot stop thinking about the implications of it.

Communicating context in dashboards is fresh.

Getting away from time dependencies and proactively triggering model sub-graphs based on the knowledge that upstream dependencies are known-fresh is... fresh.

Tracking and reporting on time to insight is fresh.

Baselining various cost optimizations (Snowflake warehouse sizing?) is fresh.

And there are many more thoughts to come.

# So stay fresh out there.
