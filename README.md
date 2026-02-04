# Open Shell Organization (OSO)

The **Open Shell Organization** is a community-driven initiative focused on improving shell command-line interfaces through standardization and tooling.

## 🎯 Mission

To create a unified, human-friendly syntax standard for shell commands—**Standardized Operations Syntax (SOS)**—that prioritizes clarity, consistency, and discoverability.

## 📦 Monorepo Structure

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
