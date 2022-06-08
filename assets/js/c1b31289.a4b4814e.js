"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[345],{3905:function(e,t,s){s.d(t,{Zo:function(){return u},kt:function(){return p}});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=h(s),p=a,f=c["".concat(l,".").concat(p)]||c[p]||d[p]||r;return s?n.createElement(f,o(o({ref:t},u),{},{components:s})):n.createElement(f,o({ref:t},u))}));function p(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var h=2;h<r;h++)o[h]=s[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}c.displayName="MDXCreateElement"},2612:function(e,t,s){s.r(t),s.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return d}});var n=s(7462),a=s(3366),r=(s(7294),s(3905)),o=["components"],i={slug:"staying-fresh-with-freshness-tables",title:"Staying Fresh with Freshness Tables",hide_table_of_contents:!0},l="Data freshness is important. Really important.",h={permalink:"/staying-fresh-with-freshness-tables",source:"@site/blog/2021-12-19-staying-fresh-with-freshness-tables.md",title:"Staying Fresh with Freshness Tables",description:'Without freshness, why should anyone trust you or your systems? Why should they pay your company money or take your recommendations and "science" seriously? Why should they spend their time building on your systems or data warehouse?',date:"2021-12-19T00:00:00.000Z",formattedDate:"December 19, 2021",tags:[],readingTime:8.11,truncated:!0,authors:[],frontMatter:{slug:"staying-fresh-with-freshness-tables",title:"Staying Fresh with Freshness Tables",hide_table_of_contents:!0},nextItem:{title:"268 Billion Events With Snowplow and Snowflake at Cargurus",permalink:"/268-billion-events-with-snowplow-snowflake-at-cargurus"}},u={authorsImageUrls:[]},d=[{value:"All-too-familiar questions look something like this:",id:"all-too-familiar-questions-look-something-like-this",level:3},{value:"Track It.",id:"track-it",level:3},{value:"Rock It.",id:"rock-it",level:3},{value:"Freshness is the goal.",id:"freshness-is-the-goal",level:3},{value:"Freshness is trust.",id:"freshness-is-trust",level:3},{value:"Freshness is seeing systems get better or worse. And learning fast.",id:"freshness-is-seeing-systems-get-better-or-worse-and-learning-fast",level:3},{value:"Freshness is empowering.",id:"freshness-is-empowering",level:3}],c={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Without freshness, why should anyone trust you or your systems? Why should they pay your company money or take your recommendations and "science" seriously? Why should they spend their time building on your systems or data warehouse?'),(0,r.kt)("h1",{id:"but-freshness-is-really-hard"},"But Freshness is Really Hard."),(0,r.kt)("p",null,"Data warehouses store data... of different shapes and sizes.... sourced from different places... at different frequencies... and modeled in different ways. It's the data team's job to make that process transparent, reliable, and understandable."),(0,r.kt)("p",null,'As the use of data ramps in an organization (often rapidly), conversations tend to go from the initial \ud83e\udd2f\ud83d\ude4c\ud83d\ude2e to "how quickly is my data loaded?".'),(0,r.kt)("h3",{id:"all-too-familiar-questions-look-something-like-this"},"All-too-familiar questions look something like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How often do we load our Postgres instances?")),(0,r.kt)("p",null,'"Every fifteen minutes."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How about logs?")),(0,r.kt)("p",null,'"Daily."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We have an event stream right?")),(0,r.kt)("p",null,'"Of course! Events land in Snowflake every three minutes."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How about the Salesforce and Hubspot integrations?")),(0,r.kt)("p",null,'"Hubspot is loaded hourly. We ran into API limits with Salesforce so that\'s loaded every few hours. Less often if we exceed quotas and the retries kick in."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Did we ever start loading Greenhouse? I want to dig into hiring funnels.")),(0,r.kt)("p",null,'"Sure did. Applications, candidates, stages, scorecards are all loaded twice per day. Rejection reasons are once per day."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What about our client data feeds?")),(0,r.kt)("p",null,'"We grab them as often as we can, but most land on Thursday or Friday. And they never come in on the weekend. Manually-curated ones always go dark in December."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is great. How about our DBT models?")),(0,r.kt)("p",null,'"Table materializations are run twice per day. Incremental models run every hour. Our views pass-through to the source tables, so they are as fresh as the source tables."'),(0,r.kt)("p",null,'"But we manually refresh the materialized views with Airflow every thirty minutes..."'),(0,r.kt)("p",null,'"And we are playing with Materialize on Kafka, so that\'s usually within a few hundred ms..."'),(0,r.kt)("p",null,'"And there are couple Snowflake tasks..."'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"....and the list goes on.")),(0,r.kt)("p",null,'This conversation quickly grows as teams, data sources, technologies, data models, and stakeholder value grows. Engineers who were once thrilled to build new systems quickly become burdened by all the freshness. Managers who were once able to recruit and onboard team members or advance initiatives become the context bottleneck. "Ms. Manager, is this table fresh? How about this one? How often can I expect data to be here?"'),(0,r.kt)("h1",{id:"measuring-freshness-with-record-level-metadata-is-ok"},"Measuring Freshness with Record-Level Metadata is OK."),(0,r.kt)("p",null,"Once upon a time database people kept track of record-level metadata with createdAt, updatedAt, and deletedAt columns. And fun stuff like database triggers, functions, audit tables, chewing on the WAL, whatever."),(0,r.kt)("p",null,"This is all dandy! But only for the source database."),(0,r.kt)("p",null,'So data warehouse people added "warehouse" or "system" record-level metadata columns: "_updated_at", "dw_updated_at", "_loaded_at", "fivetran_synced" and the like. Sprinkle in some column defaults and you\'re well on your way.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.stitchdata.com/docs/replication/loading/system-tables-columns"},"Stitch")," and ",(0,r.kt)("a",{parentName:"p",href:"https://fivetran.com/docs/getting-started/system-columns-and-tables"},"Fivetran"),' do this. It works! Querying "select max(fivetran_synced)" for all tables lets you quickly see the last time they were loaded. ',(0,r.kt)("strong",{parentName:"p"},"Fresh.")),(0,r.kt)("p",null,"DBT uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/resource-properties/freshness"},"Freshness Checks"),' to "select max(loaded_at)" sources. And provides a handy Source Freshness UI to give a visual representation of source status. ',(0,r.kt)("strong",{parentName:"p"},"Definitely fresh.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"But there are some downsides to all this freshness. Especially in columnar databases."))),(0,r.kt)("p",null,'As tables grow in size a "select max(loaded_at)" is super wasteful. These tables are rarely partitioned or clustered on load-metadata columns. And if tables are initially clustered by "loaded at", they probably won\'t be for very long. Freshness checks will therefore be less efficient (and slower) as the table gets larger, and you will spend more and more money trying to figure out how fresh things are. With limited success. ',(0,r.kt)("strong",{parentName:"p"},"Not fresh.")),(0,r.kt)("p",null,"If you're using BigQuery, each freshness check will use a job slot. Which is ok, until you scale. Or have more people checking dashboards. Or run things more frequently. A freshness check that accelerates your systems bouncing off BigQuery concurrency limits is not fresh. Batch Priority freshness checks? ",(0,r.kt)("strong",{parentName:"p"},"Not fresh!")),(0,r.kt)("p",null,"If you're using Redshift, each freshness check will steal resources that could and should be used to load, model, and serve data. ",(0,r.kt)("strong",{parentName:"p"},"A freshness check that requires WLM tuning is definitely not fresh.")),(0,r.kt)("p",null,"If freshness checks are being executed with Airflow sensors, I'm going to conveniently avoid the subject. ",(0,r.kt)("strong",{parentName:"p"},"It's not fresh.")),(0,r.kt)("p",null,"And last but certainly not least: just because a table was loaded at T1 doesn't mean it was entirely up to date at that time. ",(0,r.kt)("strong",{parentName:"p"},"Fresh? Maybe. But also maybe not.")),(0,r.kt)("h1",{id:"measuring-freshness-with-freshness-tables-is-fresh"},"Measuring Freshness with Freshness Tables is Fresh."),(0,r.kt)("p",null,"While certainly important and useful, record-level metadata columns are not always awesome. They certainly serve a purpose but freshness tables are better."),(0,r.kt)("p",null,"Freshness tables are not complicated and could look as simple as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'metadata=# \\d freshness.tbl_freshness\n                                               Table "freshness.tbl_freshness"\n        Column        |           Type           | Collation | Nullable |                       Default\n----------------------+--------------------------+-----------+----------+-----------------------------------------------------\n id                   | integer                  |           | not null | nextval(\'freshness.tbl_freshness_id_seq\'::regclass)\n fresh_at             | timestamp with time zone |           | not null |\n fqn                  | text                     |           | not null |\n table_catalog        | text                     |           | not null |\n table_schema         | text                     |           | not null |\n table_name           | text                     |           | not null |\n system               | text                     |           | not null |\n job_started_at       | timestamp with time zone |           | not null |\n job_ended_at         | timestamp with time zone |           | not null |\n job_duration_seconds | double precision         |           | not null |\n highwater_start      | timestamp with time zone |           | not null |\n highwater_end        | timestamp with time zone |           | not null |\n\n\nIndexes:\n    "tbl_freshness_catalog_idx" btree (table_catalog)\n    "tbl_freshness_fresh_at_idx" btree (fresh_at)\n    "tbl_freshness_schema_idx" btree (table_schema)\n    "tbl_freshness_table_idx" btree (table_name)\n')),(0,r.kt)("p",null,"Source freshness is definitely cool. But what about freshness at all other stages of the data dependency graph? What about staging, base/intermediary/backroom model, fact, dim/scd, and presentation-layer freshness? What about data application freshness, or the master data tier? What about scheduled query freshness?"),(0,r.kt)("p",null,"What about your metrics tier?"),(0,r.kt)("p",null,"Measuring freshness across the entire graph is super important. Freshness tables let you do exactly that."),(0,r.kt)("h1",{id:"how-to-be-fresh"},"How To Be Fresh"),(0,r.kt)("h3",{id:"track-it"},"Track It."),(0,r.kt)("p",null,"Freshness is hard but tracking freshness doesn't have to be. And you'll have to start somewhere."),(0,r.kt)("p",null,"It is not a great feat of engineering to collect metadata within ingestion systems and persist that meta after each load iteration. Load instrumentation is fresh (and you should probably be doing it anyways)."),(0,r.kt)("p",null,"It's pretty easy to add ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/resource-configs/pre-hook-post-hook"},"post-hooks")," to DBT models. Calculating and persisting data model freshness is fresh."),(0,r.kt)("p",null,'Refreshing a materialized view? Add a "INSERT INTO metadata.tbl_freshness values (select something interesting)" line to the end of the statement, wrap it in a transaction, and voila. Instafresh. (And you might have ',(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/functions/materialized_view_refresh_history.html"},"this already"),".)"),(0,r.kt)("p",null,"Use Airflow to manage data ingestion and transformation? Great! The power of ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.Base"},"on_success_callback")," and ",(0,r.kt)("a",{parentName:"p",href:"https://composed.blog/airflow/execute-context"},"context")," is already yours. Fresh."),(0,r.kt)("p",null,"At a loss for how to track freshness? Even a webhook-to-freshness-table can be fresh!"),(0,r.kt)("h3",{id:"rock-it"},"Rock It."),(0,r.kt)("p",null,"Believe it or not, many analysts and downstream engineers will self-service if they have low-friction ways for doing so."),(0,r.kt)("p",null,"Unfortunately they usually have to go to N different places, where N is the number of sources or systems in operation. Requiring stakeholders to know data systems inside-and-out, and requiring them to waste their time tracking down architectural decisions, is not fresh."),(0,r.kt)("p",null,"Freshness tables give people who are good at analytics the capability to do analytics on their insights. Meta? Yup. Powerful? Also yup. Efficient? Definitely."),(0,r.kt)("p",null,"My current employer has a single table of 31,630,551 freshness records, across thousands of distinct table FQN's and hundreds of sources. We know exactly when our data assets were historically fresh. We also know various platform upgrades successfully decreased time to insight, and which sources or data transformations were most impacted by those upgrades."),(0,r.kt)("p",null,"Ingestion and modeling systems currently persist freshness at a rate of ~10,000 records every hour, and we have several Tableau dashboards for tracking freshness deltas across categories."),(0,r.kt)("p",null,"Load and modeling optimizations are quickly surfaced, and the freshness feedback loop is on autopilot. It's fresh. And we rock it."),(0,r.kt)("h1",{id:"why-be-fresh"},"Why Be Fresh?"),(0,r.kt)("h3",{id:"freshness-is-the-goal"},"Freshness is the goal."),(0,r.kt)("p",null,"Historical data is good, but fresh data is better. Especially when it is being used to make relevant, time-sensitive decisions. Known-and-communicated-fresh data? The best!"),(0,r.kt)("h3",{id:"freshness-is-trust"},"Freshness is trust."),(0,r.kt)("p",null,"When you're fresh and you can prove it, you retain significant trust. When you're fresh and others can prove it for you, it's even better. Freshness tables exposed to stakeholders allows them to tell you you're fresh (or otherwise)."),(0,r.kt)("h3",{id:"freshness-is-seeing-systems-get-better-or-worse-and-learning-fast"},"Freshness is seeing systems get better or worse. And learning fast."),(0,r.kt)("p",null,"Data systems are complex, and the most important thing you can do when building complex systems is provide visibility into them. When anyone can debug history at any point in time, it's fresh. When you can prove, using historical freshness data, that engineering work is decreasing time to insight, it's fresh."),(0,r.kt)("p",null,"When you can see freshness getting worse as volume increases, new systems come online, or new platform requirements get added, it's fresh. When you can alert on freshness thresholds...... you get the idea."),(0,r.kt)("h3",{id:"freshness-is-empowering"},"Freshness is empowering."),(0,r.kt)("p",null,"If it's not clear by now, knowing what systems are doing and what tables are fresh is incredibly empowering. It enables work prioritization, continuous system insights, proactive solutions, and innovation. Freshness facilitates data SLO's and SLA's, helps frame conversations around a common point of reference, and a whole lot more."),(0,r.kt)("h1",{id:"use-freshness-to-keep-getting-freshr"},"Use Freshness To Keep Getting Fresh","[r]","."),(0,r.kt)("p",null,"After seeing the past 6-7 months of freshness data I cannot stop thinking about the implications of it."),(0,r.kt)("p",null,"Communicating context in dashboards is fresh."),(0,r.kt)("p",null,"Getting away from time dependencies and proactively triggering model sub-graphs based on the knowledge that upstream dependencies are known-fresh is... fresh."),(0,r.kt)("p",null,"Tracking and reporting on time to insight is fresh."),(0,r.kt)("p",null,"Baselining various cost optimizations (Snowflake warehouse sizing?) is fresh."),(0,r.kt)("p",null,"And there are many more thoughts to come."),(0,r.kt)("h1",{id:"so-stay-fresh-out-there"},"So stay fresh out there."))}p.isMDXComponent=!0}}]);