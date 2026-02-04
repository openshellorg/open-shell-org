---
title: SOS Formal Grammar
description: The official Standardized Operations Syntax (SOS) Context-Free Grammar.
---

---

Standardized Operations Syntax (SOS) replaces loosely defined POSIX guidelines with a strict CFG based on the **Standardized Operations Syntax**.

## Mandatory Flag Permutation

To prevent "greedy" consumption of positional arguments and ensure unambiguous parsing:

- **ENFORCED:** `--flag=value`
- **DEPRECATED:** `-f value`

Every long-form flag MUST use the equals sign for assignment. Positional arguments follow flags and are never consumed by them.

## Key Syntax Rules

1. **Short Flags**: `-v`, `-f` (atomic, no value assignment via space).
2. **Long Flags**: `--verbose`, `--file=path/to/script`.
3. **Double Dash**: `--` terminates all flag parsing; all subsequent arguments are treated as positionals.
4. **Ordering**: Tools must not be sensitive to flag ordering among themselves.
