---
slug: gdpr-for-engineers-what-is-personal-data
title: GDPR for Engineers - What is Personal Data?
authors:
    name: Jake
tags: [gdpr, engineers, data privacy]
hide_table_of_contents: true
---

We all know that GDPR (also known as RGPD in France) has brought data policy into the spotlight for many technical organizations. As of May 25, 2018, if your systems (both automated and otherwise!) handle PII of individuals residing in the EU, you must comply with regulation. While this enforcement date makes the topic seem like old news, many US-based companies are unclear of the specifics and vastly underprepared to deal with the implications.

Before diving too far into the deep end of implementation detail, one must first understand the basics. The only way to conform to this regulation (which many US-based companies still don't) is to thoroughly understand what data needs to be handled with care.

So... what is personal data?

<!--truncate-->

**At its core, personal data is any information that relates to an identified or identifiable living individual. It also pertains to different pieces of information that, when collected together, can lead to the identification of an individual.**

But, what does this mean exactly from a practical perspective? Some of the following may be obvious, but some may not be. Let's dive in...


# PII

### Name + Surname is personal data.

The name "George Washington" is PII. If your application includes user registration functionality or your systems process and ship orders to a named individual, you're dealing with PII.

### Home address is personal data.

Again, if you ship orders to a home address you're handling PII.

### An email address, if it includes personal information like first/last name, is personal data.

georgewashington1792@hotmail.com is PII. Since there's no guarantee incoming email addresses will be inherently free of PII, it is a good idea to consider all email addresses PII.

### Any personal identification card number is personal data.

Bank account number, driver's license number, passport number, and social security number are all PII.

### Location data (device information from a phone or laptop) is personal data.

Incoming latitude and longitude data (which flows freely from mobile devices) is considered PII.

### IP address is personal data.

Client IP address is considered PII. If your systems log X-Forwarded-For or any form of the original client IP, your logs are filled with PII.

### Various cookies can be personal data.

If your application stores any form of PII in cookies, these cookies are also PII (and the transitive property of equality has struck again).

### Ad identifiers (android/ ios devices) are personal data.

Android and iOS devices have device-specific advertising identifiers. These are considered PII.

### Healthcare data is usually personal data.

This one goes without saying.

### Pseudonymized data that can be used in conjunction with another source to re-identify is PII.

If you're pseudonymizing "email", but the output of the pseudonymization process can used alongside another source to tie back to the original individual, it's still PII.

# NOT PII

### Formerly-personal data that has been rendered completely anonymous is no longer personal data.

If a piece of PII has been rendered completely anonymous (typically through hashing it), it is no longer considered personal data. MD5-ing data like email addresses or first/last names is a perfectly acceptable method of eliminating the PII designation, especially when it is combined with a salt.

### Company registration identifiers are not personal data.

Registration details used internally within a specific company to designate an individual are not considered PII.

### Primary keys on your "users" table are not personal data.

Database internals (like a primary key or unique user-specific `uuid` value) are not considered PII, and are an easy way to isolate PII without losing referential integrity.

### Email addresses that do not include personal information are not personal data.

twinkylvr234@hotmail.com is (sadly) not considered PII. But again, it's a good ideal to treat all emails as PII.

# In conclusion

PII is everywhere! GDPR has drastically changed the requirements for data processing and storage of personal data, but without knowing what "personal details" are exactly it is very hard to comply with regulation. If your application collects, processes, or stores personal data of European residents, you're responsible for knowing and complying with the laws.
