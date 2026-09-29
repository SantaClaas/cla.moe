---
author: Claas
pubDatetime: 2026-09-29
modDatetime: 2026-09-29
title: Coding Guidelines
featured: false
draft: false
---
# Naming

## Optimize for reading not typing

Avoid lazy ambiguous abbreviations. Most abbreviations are ambiguous. Only very common/established/well-known abbreviations are permitted such as “id” and “uuid”.

Abbreviations require a translation step when not used to them and this translation step is especially jarring when there is a collision due to an abbreviation used for something else in another context the reader is familiar with. They also don’t save on writing that much as most code editors have autocomplete. This was true before “AI” or LLMs became popular. Now if you generate most of your code you will need to read more than write if you still read the code at all. The additional token cost is in my opinion marginal like the additional disk cost for “larger” files without abbreviations. When code hits the compilation step unabbreviated names get optimized away so we don’t need to do this before then. Additionally our brains are amazing at recognizing patterns allowing us to read words just by recognizing a pattern of letters without reading every letter like a school kid. Same pattern recognition can be claimed for abbreviations but the chance of a collision and readjustment is higher for fewer letters than more.

If abbreviations come from external APIs or are required for external APIs then they should only exist at the boundaries of our applications where we need to interact with external systems. Internally we use the non-abbreviated names. The wire format should not leak into application internals.

This rule can be broken when an optimization needs to be done for example for a wire protocol. But those optimizations need to be justifiable and sensible. For example using an abbreviation in a json payload for a simple response is hard to justify as json itself is not a very space efficient format in itself. But it exists as a plaintext format and is likely so popular because it is still human-readable. Using abbreviations in json would defeat the point of using json in the first place as they make it less human-readable. However there are exceptions when they can be justified.

### Examples

These examples illustrate some of the principles mentioned above.

#### JSON Web Tokens (JWT)

Todo example containing ambiguous “sub” claim which could mean subscription, subject, substitute

#### Home Assistant discovery payload

Todo

### Naming within context

Avoid stutter, pleonasms and tautologies.

## Commands

When writing out commands to text files, use the long form for options when available. When writing commands in the terminal only for you to read do whatever you want of course.

## Booleans

Booleans should always be prefixed with “is” or when not possible otherwise with “can” or “has” but in practice the latter are rarely used.

This avoids having booleans in different tenses(?). For example “created” is ambiguous and could mean a created date or whether something was created or is created.

As seen in the example it often times makes sense to use a date or different value instead of a Boolean as that contains more information that can come in handy later. But be careful as this can lead to too early optimizations and conflicts the data minimization principle of the General Data protection regulation (GDPR).

