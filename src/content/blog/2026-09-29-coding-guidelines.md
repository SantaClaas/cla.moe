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

Abbreviations require a translation step when not used to them and this translation step is especially jarring when there is a collision due to an abbreviation used for something else in another context the reader is familiar with. They also don’t save on writing that much as most code editors have autocomplete. Additionally our brains are amazing at recognizing patterns allowing us to read words just by recognizing a pattern of letters without reading every letter like a school kid. Same pattern recognition can be claimed for abbreviations but the chance of a collision and readjustment is higher for fewer letters than more.

If abbreviations come from external APIs or are required for external APIs then they should only exist at the boundaries of our applications where we need to interact with external systems. Internally we use the non-abbreviated names. 

This rule can be broken when an optimization needs to be done for example for a wire protocol. But those optimizations need to be justifiable and sensible. For example using an abbreviation in a json payload for a simple response is hard to justify as json itself is not a very space efficient format in itself. But it exists as a plaintext format and is likely so popular because it is still human-readable. Using abbreviations in json would defeat the point of using json in the first place as they make it less human-readable. However there are exceptions when they can be justified. JWTs use abbreviations 

When writing out commands to text files, use the long form when available.

