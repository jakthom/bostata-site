---
slug: why-your-company-should-own-its-own-data
title: Why Your Company Should Own Its Own Data
authors:
    name: Jake
tags: [data, ownership]
hide_table_of_contents: true
---

When considering software and related infrastructure, the business of today is caught in a never-ending cycle of "build vs. buy". Many third-party companies solve serious challenges such as managing sales pipelines, accounting automation, payment processing, and internal communication. These alternatives to "building it yourself" empower companies to operate faster or more efficiently, and overall benefit to the customer is often net-positive. When considering various alternatives, there is one critical component of your business that you should strongly reconsider leaving in the hands of third parties, however: your data and supporting data infrastructure.

<!--truncate-->

The most progressive companies in the world, of all industries and sizes, have one thing in common: an obsession with the collection and in-house ownership of data. Why invest in your own data infrastructure? It adds long-term value to your organization, has positive financial implications, and gives your company competitive advantages that are achievable in no other way.

# Owning your data adds to your company's long-term value.

Imagine you're an investor, evaluating two functionally-equivalent companies. Both companies have similar technology, a large customer base, provide real value to the world, and have been in business for about five years. Company 1 has four years' worth of site traffic and customer behavior, application performance metrics, clean financial data, git (code change) history, and a number of external datasets relevant to its core competencies. Company 2 simply has its cofounders and a small subset of the engineering it has employed along the way.

**Which one would you invest in?**

*Probably not the one with minimal data to back their claims up.*

Having full ownership of your own data makes tracking unsampled site performance over time easy. With a product like Google Analytics, on the other hand, that is impossible to do unless you are held hostage at an annual cost of over $150,000. Want to definitively prove business growth or product efficacy? Want to prove your systems have become more efficient or technical competence has increased throughout your company's existence? Instrument your systems and warehouse the data.

It is only through in-house ownership of your data that this is possible.

# Owning your data has large financial implications- both now and in the future.

Let's consider a widely-used system for site instrumentation and analtics previously mentioned: Google Analytics. If you want a "pure", unsampled view of your site traffic you will need to become a Google Analytics Premium (now branded "360") customer at a cost of over $150,000 annually. What happens when you become a paying customer, only to decide five years down the road that you need to cut costs and downgrade the service? All your historical data will be sampled, and you will be left with only a rough estimate of site traffic over time. You certainly wouldn't want to lose insight you once had, and are therefore held hostage by your own data.

Let's consider another commonly-used platform for application instrumentation: Mixpanel. Mixpanel is incredibly easy to set up, straight-forward to add custom instrumentation, and initially inexpensive. But as your site scales or you want to instrument more and more components, the cost of the service becomes prohibitively expensive. Whether or not your revenue scales relative to site traffic, the cost to you certainly will. At a rate that is typically higher than your business itself is scaling. Again, you don't want to lose historical context of your business by downgrading instrumentation, so you become held hostage by the very data your application generated.

# Owning your data gives you competitive advantages that are achievable in no other way.

When your site scales yet the associated data collection systems are owned by another company (and rented by yours), who has the advantage? The answer is simple: not you!

What happens when you stop paying a third-party service?

You lose access, and they keep your data. If they're lucky, you forgot about the tracking code placed on your site, and continue to ship them data for an extended period of time.

What happens when Google wants to launch a product that directly competes with yours?

They have years of your site traffic data, and probably your closest competitors' data as well.

What happens when the data your systems or customers produced has insight that can be monetized, or activity that can be aggregated, enriched, and sold to a partner?

Your company won't be seeing any of those financial benefits, sorry!

Conversely...

# If you own your data, you have full control.

Want to track activity at a finer granularity than you can with an existing tool? You can do that, because it's yours!

Want to ensure you comply with GDPR?

It's much easier if you control the collection and persistence of personal data, and can simply issue a `DELETE FROM some_table WHERE id = 10;` sql statement!

Want to persist terabytes of data in a 99.999999999% durable location that is accessible at any time? You can do so with AWS S3 at a whopping price of $0.023 per GB, per month. Have more data than that, and want to roll it into long-term cold storage? AWS Glacier exists for exactly that reason, and is priced at a convenient $0.004 per GB, per month. Thanks to Moore's law, data storage gets less expensive over time, unlike any third-party data service provider on the market.

# Conclusion

In order to build the most value possible for your organization, realize maximum financial benefits, and retain various competitive advantages, you should own your data. While many third-party data services will be easy to set up initially, your business will probably find itself with maximum expenditures, minimum flexibility, lacking ownership of years' of data it has created, and a lot of hassle long term. In order to maintain maximum competitive advantage, future flexibility, and overall cost efficiencies, you must own and manage your own data.
