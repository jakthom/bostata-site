---
slug: 268-billion-events-with-snowplow-snowflake-at-cargurus
title: 268 Billion Events With Snowplow and Snowflake at Cargurus
authors:
  name: Jake
tags: [snowplow, snowflake, cargurus]
hide_table_of_contents: true
---


Two years ago we set up Open-Source Snowplow at CarGurus to fulfill a need for self-managed client-side instrumentation. Since that time it has become incredibly impactful for the entire company and has scaled significantly beyond what was originally envisioned. The following is an overview of why we set up the system, our experience with it, what we have learned, and where we see it continuing to go.


This post is quite long, so before getting too far into the details....

<!--truncate-->

# The Stats At Time of Writing

Total events collected: **>268 billion**

Data collected: > **1.5pb (uncompressed)**

Event volume: **~ 1 billion events/day**

Max Daily Throughput: **~15k events/second (sustained during peak hours)**

Distinct events: **hundreds and hundreds**

Infrastructure upgrade duration: **less than two minutes with zero downtime**

Distinct sites with Snowplow tracking: **>180**

So let's dive in.

# Why we Snowplow

We chose Snowplow instead of building our own event tracking system, and plan to stick with it for the foreseeable future. Why?

**We wanted to independently manage and scale data collection systems.**

A conversation early in my tenure at CarGurus made a topic abundantly clear: many teams had a strong desire to separate concerns. At that time the company was growing quickly and demands were rapidly changing. Analysts and engineers were joining, onboarding fast, and asking completely new questions of our data. It was all-too-common to tell them their questions simply could not be answered due to the additional load tracking would place on production systems.
After being personally involved with a couple event-volume-related site outages, it was evident we needed to rethink data collection systems. We needed to be able to scale data collection infrastructure completely separately from application infrastructure, and we needed to significantly isolate the blast radius if something went wrong.

Snowplow was a strong ✅.

**We wanted to modernize event collection systems.**

Another requirement of choosing Snowplow was its ability to quickly and effectively introduce a lambda architecture into our analytics stack. As customer needs and demands evolved, we found that having both a real-time, low-latency (on the order of hundreds of milliseconds) component of the event pipeline as well as a batch-based, higher-latency (on the order of minutes) component gave us significant flexibility to proactively fulfill stakeholder asks before they surfaced.

Our pipelines are set up in AWS with Kinesis as transport and Snowflake as long-term data storage. As stakeholders need real-time access to enriched data, Kinesis is the go-to location. If stakeholders need access to historical event data or want to augment it with other sources in the data warehouse, Snowflake is the place to go.

Snowplow allowed us to introduce new ideas and methodologies and fulfill both point-in-time and future stakeholder needs. ✅

### The world of third-party tracking is rapidly changing and will continue to.

As anyone involved in the world of client-side analytics is probably well-aware of, third-party tracking is increasingly going away. Initiatives like this and this and this are fantastic for online privacy (and commendable), but have major implications for tracking and analytics. With an eye towards the future we knew we needed to decrease reliance on Google Analytics, Adobe, Heap, and all other similar third-party tracking systems if we wanted full insight into web traffic. We wanted 100% of site behavior instead of sampled GA or ad-blocked Adobe. And we wanted to own the resulting data.

Snowplow enabled us to track first-party web activity and regain full visibility into usage behavior on our site. ✅

### Snowplow sets a high bar for fault-tolerance, redundancy, and durability.

When set up properly, the Snowplow infrastructure is extremely fault-tolerant. We set up ours in AWS and have not regretted it whatsoever.
Javascript tracking code buffers unsent events locally in the case of collection infrastructure being down. AWS application load balancers are multi-AZ and AWS maintains a good SLA for them. All access logs are retained for a period of time in case the load balancer is up but the rest of the system is down. Kinesis replicates data across three AZ's by default, and retention can be configured up to 168 hours in the case of mid-pipeline enrichment outages. S3 is highly durable and highly available by default. And the list goes on....

### We wanted to own all data that was generated.

As mentioned above, if we were going to invest time and money building scalable event-collection infrastructure, we simply had to own the outcome. It is a significant investment to get large-scale infrastructure and instrumentation off the ground, and it's hard to do tracking in a way that doesn't impose a burden on analysts down the road (think Google Analytics events).
We didn't want to deal with API rate limiting when attempting to recover our data. We didn't want to be tied to BigQuery, and we didn't want our customers' data flowing through other companies' systems.


### We needed to keep data quality high.

When building out data collection and processing systems, it's one thing to set up infrastructure. It's a completely different story to keep quality high as priorities, teams, and customer demands shift. It's even harder to impose more work in an attempt to keep data "clean".

The way snowplow handles event validation and stream-redirection was a perfect fit in our case. After setting the system up we quickly found that leveraging Self-Describing Events and the associated jsonschemas empowered us to enforce data quality in a very low-friction way. Whenever events start flowing (with a bad push, etc) that don't adhere to the implementing party's jsonschema, they are redirected out of the "good" path for immediate review and recovery. Self-describing events (and jsonschemas) also gave us the ability to do some pretty neat automation, which will be covered later.

### The world of compliance is changing rapidly and we needed the ability to audit every piece of information.

Since we first set up Snowplow the world has been forced to navigate two big data-privacy hurdles: GDPR and CCPA. Since we own and operate all collection infrastructure we did not need to get a third-party vendor DPA. Snowplow gives a significant amount of flexibility for enriching and redirecting PII, as well as configurable pseudonymization. It's good, it "just works", and it has saved us a considerable amount of time.

We've also spent a significant amount of time persisting full system lineage when splitting events into Snowflake which makes it easy to fully adhere to privacy legislation and associated requirements.

### We wanted to build, guide, and get out of the way.

My favorite part about programming and tech is building (machine) processes, cultivating good (human) habits, and getting out of the way. An early challenge was maintaining clear, consistent definitions of data between frontend engineers (the implementer of tracking) and analysts (the stakeholders of said tracking). Event data was previously tracked, flowed through a number of different systems, and was often renamed (sometimes several times) when it finally landed in Snowflake.. Snowplow's self-describing events have allowed us to shift many conversations away from data pipeline engineers and back to where they should be taking place. I was able to back away since stakeholders and implementers were able to approach important conversations from a point of shared, consistent understanding.

### Last but not least, we needed to hit the ground running.

While we may have had time to build out our own system from scratch, why build when you can lean on the backs of giants? The community of people contributing to Snowplow has grown significantly since the first time I implemented it, and people all over the world have run into almost every challenge imaginable. As fun as it would have been to deconstruct the system and build and implement our own, it simply wasn't worth it. Our stakeholders had questions that they wanted answered "yesterday" and their needs were our priority #1.

Snowplow enabled us to hit the ground running and answer real business questions "now". ✅


# Our Journey

## Phase 1: Keep It Simple. Get It Running. Prove the System's Worth.

When Snowplow was first rolled out there was a single mission in mind: make sure it was a good organizational fit. We had systems in place with some functional overlap already, so we had to make sure we weren't introducing a new system simply........ for the sake of introducing a new system. Or staking claim in others' territory. The system had to work. It had to answer questions that had been previously-unanswerable. It had to be robust. And it had to solve real-life challenges.

### We very consciously chose to:

**Automate all infrastructure.** We wanted to scale, upgrade, and roll out entirely new sets of infrastructure fast. Everything was Terraformed and infrastructure was 100% immutable.

**Keep it simple.** We could have gone straight to k8s or autoscaling clusters or ecs or eks or any other new (admittedly attractive) thing. But we didn't. We wanted to see how the system itself would perform and scale.

**Focus on the stakeholder.** The only way this initiative was going to work was if others felt ownership of it, it decreased their pain, it empowered them to do their jobs better, or a combination of all. Instead of focusing on a hip/cool/hot/new system we focused on answering the questions at hand.

## Phase 2: Ramp Adoption. Answer More Questions.

Once the system was set up and a minimal set of events were implemented across our site, we started really putting the system to work. We went around the company figuring out what questions people had been historically struggling to answer, and then helped implement the necessary tracking to answer these questions. We also pushed the system in other ways, such as seeing how effective it was for third-party tracking on other websites, redirect tracking, no-js tracking, and more.

We originally rolled out most of the tracking via structured events. While great for adoption, it was evident things would quickly get out of hand before realizing the full value of the system if we continued down this path. Json-encoded strings with arbitrary values were being passed as se_property. Event definitions were unclear and quickly inconsistent. Snowflake query duration (and therefore cost) was going through the roof as people tried to pull data out of a single poorly-clustered "struct_events" table. And more.

While we were able to answer questions, it was clear this methodology of doing so would be unsustainable and/or expensive long term.

## Phase 3: Go All-In on Mandating Data Quality.

After quickly learning the pain points associated with struct-event tracking in a company our size we had a decision to make: **go all-in on self-describing events or bust.**

Admittedly, mandating that events only get successfully delivered when accompanied by a jsonschema is a bit of overhead that is passed to the implementer. In this case, quality comes at a small time cost. But said cost is more than worth it.

**Why it's worth using schemas:**

- Data can be explicitly defined and versioned. Schema evolution is possible without blowing up the world of analytics.
- Self-describing events can be independently monitored and alerted on.
- Incoming events are validated and redirected in-transit.
- Jsonschemas establish consistency and empower 1:1 communication.
- Significant downstream automation can be built on top of schemas. Auto-migrating tables, splitting/deduplicating events, and intelligently clustering tables in snowflake are only possible with self-describing events.
- "Bad" event volume can be alerted on and directed to the respective team.

## Phase 4: Solidify Infrastructure. Add Necessary Complexity. Automate Data Engineering Toil Away.

Once we knew the system would work and that it was a good organizational fit, the next step was to make the supporting infrastructure rock-solid.

Originally setting up the system in the simplest manner possible meant that we willingly accepted tradeoffs and some risk. We had to make sure we had enough machines behind the load balancer to service traffic at any point in time. We had to closely (and sometimes manually!) monitor the enrichment and s3 loader machines. And we had to manually scale supporting infrastructure when necessary. From a cost and utilization perspective, we ran the system slightly over-provisioned during peak volume and significantly over-provisioned during the slowest points of the day. The simplicity came at a cost tradeoff, but again - there's very little point in optimizing a system that you're not going to continue using.

As we became more confident in the long-term direction of this project it was time to buckle down and set up all infrastructure in a way that we could step away from. This ultimately meant containerizing all systems, introducing auto-scaling groups with reasonable scaling policies, auto-scaling dynamodb, figuring out how to reasonably auto-scale kinesis, and a number of other not-too-complicated-but-incredibly-important devops things. We decided to run EC2 ASG's of flatcar container linux vs running the containers on ECS, EKS, or a k8s cluster, though one of those will probably be in our future.

Another critical aspect of this automation was the implementation of a load/deduplicate/split/auto-cluster system. We have pipelines geolocated all over the world and load all data into Snowflake. By leveraging self-describing event json-schemas mandated in Phase 2, we were able to auto-migrate Snowflake tables, auto-split events into said tables, efficiently deduplicate events, strategically cluster, and much much more.

The automation here has saved us considerable amounts of time and money, and has allowed us to go incredibly far by automating ourselves away.

## Phase 5: Decrease Implementation Overhead. Don't Sacrifice Data Quality.

This is the phase we are in currently and it's a very important one. As a data engineer, if you get data quality wrong (even unintentionally!), it can easily lead a company in a bad direction and will create massive problems that take years to resolve. We did not want to make these mistakes, so we quickly pivoted towards strictly prioritizing data quality. But we believe that's not the end of the story. If we can mandate data quality while making schemas as easy to implement, deploy, evolve, and monitor as not having them at all, we'll consider it a massive success. We also strive towards establishing clear, consistent, sharable definitions for all and make all definitions easily searchable.

At this point we are well on our way to achieving these goals. But we aren't quite there yet.

# What we have done a bit differently

The snowplow stream collector, the stream enricher, and the s3 loader are basically out-of-the-box and have been configured to suit our needs and volume. But we've gone a slightly differently direction with other core aspects of the system.

We decided not to use the snowplow snowflake loader largely due to avoiding additional dependencies, needing more flexibility, and desiring to process and store data consistently to other internal systems. We have a significant amount of professional experience with Snowflake administration/automation, and saw opportunity to make our lives a bit easier long term if we rolled this portion of the pipeline ourselves.

We decided not to use the iglu schema repository (but do use jsonschemas for self-described events!) due to identifying numerous opportunities at this level. This functionality may be covered in another future blog post.

We love Graylog, fluent-bit, and a handful of other tools. So we've incorporated them in useful ways.

# What we have learned along the way

### Stakeholder empowerment is #1.

I cannot stress this enough: the only way to make initiatives like this work is by taking a customer-focused, stakeholder-oriented approach. As a data engineer my customers are typically analysts or various business intelligence initiatives. But as data maturity grows in the organization the word "stakeholder" evolves to also include other internal systems, and then SEO optimization, potentially strategic partnerships with other orgs, external customers, and much more.

By running Snowplow and leaning into significant Snowflake automation my role has become less gatekeeper and more facilitator, working alongside stakeholders to achieve the respective end goal.

### Infrastructure and system automation is #2.

Setting up and thoroughly understanding the Snowplow stack on AWS is non-trivial. There's a significant number of moving pieces and a deep understanding of Kinesis internals is required to manage it well. We automated everything from the very start so spinning up and properly configuring 70+ AWS resources per pipeline becomes (almost) trivial.

Another benefit of full infrastructure automation is the ability to shut systems down cleanly when we don't need them anymore, and make code central to infrastructure rollouts.

### Explicitly mandating data quality has numerous benefits. It may come at a cost, but it doesn't have to.

Leaning into 100% self-describing Snowplow events admittedly comes with operational overhead. "Bad" must scale as cleanly as "good" in the case that a high number of events are redirected. Otherwise, the "pipes" will become constricted and the entire system will back up. Event schemas must be properly-validated json before being deployed into production pipelines. Front-end engineers must be personally invested in helping to mandate data quality, and using jsonschemas to validate each piece of instrumentation is new cognitive load.

We've leaned into automation and/or internal tooling here as well to help reduce this overhead, but there's much further to go.

### The Snowplow+Snowflake combination scales extremely well. It has empowered us to answer many previously-unanswerable questions and has opened up numerous doors of opportunity.

I have personally run open-source Snowplow analytics a large number of times with AWS Redshift as a data warehouse. While functional, it quickly becomes a burden to maintain and scale. The Snowplow+Snowflake combination is extremely effectively and extremely powerful. And scales well, even at CarGurus' volume.

# Where we see it continuing to go in the future

### Leverage the stream, Luke

There's so much more opportunity to leverage data in-transit that we've barely cracked the surface of. Streaming databases such as Materialize and KSQL show massive promise for continuing to decrease time-to-insight and are some of the most exciting data projects since PipelineDB. I'm thrilled at the ability to bolt functionality onto an existing system (vs. re-architecting it from scratch as demands change) and am very interested to see what the low-latency future holds.

### Continued focus on auditability, provenance, and data governance.

Have I mentioned self-describing events with jsonschemas are amazing? Another significant benefit of them is the ability to cleanly, quickly, and effectively track provenance from upstream systems, all the way through the pipeline, to a data warehouse. Provenance is quite easy.

When it comes to data governance and auditing, we took numerous intentional steps in our Snowflake loader to make finding and purging data upstream doable. Snowflake's  METADATA$FILENAME  and  METADATA$FILE_ROW_NUMBER  functionality means that if anyone requests removal of data (per GDPR) or requests data not be sold (per CCPA), it can be purged or excluded from both Snowflake as well as upstream flat files sitting in S3/Glacier/etc.

Continue to empower stakeholders, developers, analysts

Last but certainly not least, identifying and eliminating points of misunderstanding, cognitive load, or implementation/development challenges remains top priority. "Stakeholders" may be fellow engineers, they may be analysts whose job is to use the data we're collecting and warehousing, or they may be product owners whose job and decision-making process relies on our data.

We'll continue to push forward to make schema creation, discovery, evolution, and management more intuitive and fun.

We'll continue to make real-time analytics a reality.

We'll continue to make event-level observability and anomaly detection a critical part of instrumentation.

We'll continue to push forward with automating ourselves out of the way.

And we'll keep trying our best to make others' lives easier.

# In Conclusion

If there's any confusion by this point, the Snowplow and Snowflake combination has worked incredibly well for CarGurus. The company has leveraged these systems to blow open doors of opportunity and the system has proven itself time and time again over the past couple years.

Looking backwards, I'm quite happy with the rollout and have certainly learned a lot.

Looking forward I see only pure potential.
