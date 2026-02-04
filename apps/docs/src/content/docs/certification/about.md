---
title: OSO Certification Program
description: How to certify your CLI application as SOS (Standardized Operations Syntax) compliant.
---

---

The **Open Shell Organization** (OSO) provides a formal certification for command line utilities.

## Why Certify?

Certified tools earn the trust of system administrators and automation engineers by guaranteeing predictable behavior and safe execution patterns.

## The Certification Mark

Upon certification, the command line app is allowed (and encouraged) to display the certification in their error and help outputs on the first line.

### Required Branding Implementation

The certification statement must be stylized using the specific OSO-Standard ANSI codes:

**ANSI Implementation String:**
`\x1b[37m{\x1b[37mO\x1b[31mS\x1b[94mO\x1b[37m}\x1b[0m Certified SOS-Standard`

### Visual Identity

- **White Braces**:
 `{ }`
- **White O**: `O`
- **Red S**: `S`
- **Light Blue O**: `O`

This high-contrast palette ensures the mark is the first element the human eye anchors to.
