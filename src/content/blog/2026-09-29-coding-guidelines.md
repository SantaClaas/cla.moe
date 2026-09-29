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

Avoid lazy ambiguous abbreviations. Most abbreviations are ambiguous. Same as hashing reduces the set of variations so do abbreviations. Only very common/established/well-known abbreviations are permitted such as “id” and “uuid”.

If abbreviations come from external APIs or are required for external APIs then they should only exist at the boundaries of our applications where we need to interact with external systems. Internally we use the non-abbreviated names. 

This rule can be broken when an optimization needs to be done for example for a wire protocol. But those optimizations need to be justifiable and sensible. For example using an abbreviation in a json payload for a simple response is hard to justify as json itself is not a very space efficient format in itself. But it exists as a plaintext format and is likely so popular because it is still human-readable. Using abbreviations in json would defeat the point of using json in the first place as they make it less human-readable. However there are exceptions when they can be justified. Inside 

When writing out commands to text files, use the long form when available.

