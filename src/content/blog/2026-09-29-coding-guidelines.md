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

Avoid lazy ambiguous abbreviations. Only very common/established/well-known abbreviations are permitted such as “id” and “uuid”.

If abbreviations come from external APIs or are required for external APIs then they should only exist at the boundaries of our applications where we need to interact with external systems. Internally we use the non-abbreviated names. 

This rule can be broken when an optimization needs to be done for example for a wire protocol. But those optimizations need to be justifiable and sensible.

When writing out commands to text files, use the long form when available.

