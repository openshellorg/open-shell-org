---
title: Mandatory Protocols
description: The "Safety-Valve" Protocol and other mandatory platform behaviors.
---

Compliance with SOS requires implementing specific interaction patterns.

## The "Safety-Valve" Protocol

Every compliant tool must implement a `--dry-run` flag.

### Interaction Requirements

1. **Dry Run Output**: When `--dry-run` is passed, the tool MUST NOT perform any destructive actions.
2. **Execution Tree**: The tool MUST output the exact execution tree (the logical steps it would have taken) in structured **JSON** format.
3. **Machine Readability**: This allows for CI/CD pipelines to validate command intent before execution on production systems.

```bash
# Example
my-app --file=data.json --delete --dry-run
```

Output:

```json
{
  "action": "delete",
  "target": "data.json",
  "verified": true,
  "safety_valve": "triggered"
}
```
