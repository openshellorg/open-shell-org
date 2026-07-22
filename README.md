# Open Shell Organization (OSO)

The **Open Shell Organization** improves shells and CLIs through **standards, certification, and companion tooling**.

## Mission

Two complementary tracks:

1. **Standardized Operations Syntax (SOS)** — unify human-friendly CLI flag syntax and certify compliant tools (“Save Our Syntax”).
2. **Structured shell architecture** — advocate typed data pipelines (endorse [Nushell](https://www.nushell.sh/)) so stdout is not forced to be both a pipe *and* a display canvas. Do **not** reinvent Nushell; document the model and ship helpers.

SOS remains the certification/flag work in this monorepo. Structured-shell direction lives in sibling repos (below).

## Related projects

| Repo | Role |
|------|------|
| [shell-architecture](https://github.com/openshellorg/shell-architecture) | Thesis and layers: structured I/O, SOS, terminals, Dev-Centr relationship |
| [nu-require](https://github.com/openshellorg/nu-require) | `validate()` — Nushell-tailored CLIs fail clearly outside `nu`, with optional install offer |

Dev-Centr **recommends/configures** Nushell for developers; OpenShellOrg **standardizes and tools**. Keep the orgs aligned, not merged.

## Monorepo Structure

This repository is organized as a pnpm workspace monorepo:

```
open-shell-org/
├── apps/
│   ├── docs/          # Documentation site (Astro Starlight)
│   └── main/          # Main website (SolidStart)
├── packages/
│   ├── sos-grammar/       # @sos/grammar - SOS syntax grammar definitions
│   └── sos-validator-core/ # @sos/validator-core - Core validation library
└── package.json
```

### Apps

| App | Description | Tech Stack |
|-----|-------------|------------|
| `apps/docs` | SOS specification documentation | Astro Starlight |
| `apps/main` | Organization website | SolidStart |

### Packages

| Package | Description |
|---------|-------------|
| `@sos/grammar` | Grammar definitions for parsing SOS syntax |
| `@sos/validator-core` | Core validation logic for SOS compliance |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (v10+)

### Installation

```bash
# Clone the repository
git clone https://github.com/openshellorg/open-shell-org.git
cd open-shell-org

# Install dependencies
pnpm install
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build
```

## 📖 Documentation

Visit the [SOS Documentation](./apps/docs) for the full specification and usage guides.

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## 📄 License

This project is open source. See individual packages for specific licensing information.

---

<p align="center">
  <strong>Save Our Syntax</strong> 🐚
</p>
