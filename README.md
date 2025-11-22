# React + TypeScript Monorepo

A modern monorepo setup using React, TypeScript, Vite, and pnpm workspaces with ESLint and Prettier.

## 📦 Workspaces

This monorepo contains three workspaces:

- **`packages/authorization`** - Authentication and authorization components and hooks
- **`packages/core`** - Shared UI components and utilities
- **`packages/app`** - Main application that consumes the other packages

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 6** - Build tool and dev server
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

- Node.js 18+ 
- pnpm 8+

Install pnpm globally if you haven't already:
```bash
npm install -g pnpm
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:3000`

## 📝 Available Scripts

### Root Level

- `pnpm dev` - Start the app in development mode
- `pnpm build` - Build all packages for production
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

### Workspace Level

Run commands in specific workspaces:

```bash
# Run dev server for app
pnpm --filter @repo/app dev

# Build authorization package
pnpm --filter @repo/authorization build

# Lint core package
pnpm --filter @repo/core lint
```

## 📁 Project Structure

```
.
├── .github/
│   └── copilot-instructions.md
├── packages/
│   ├── authorization/          # Authorization workspace
│   │   ├── src/
│   │   │   ├── AuthProvider.tsx
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── core/                   # Core UI components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── Button.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useCounter.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── app/                    # Main application
│       ├── src/
│       │   ├── App.tsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.tsx
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## 🔗 Workspace Dependencies

The `app` workspace imports from the other workspaces using workspace aliases:

```typescript
import { AuthProvider, useAuthContext } from '@repo/authorization';
import { Button, useCounter } from '@repo/core';
```

These are configured in `package.json` using workspace protocol:
```json
{
  "dependencies": {
    "@repo/authorization": "workspace:*",
    "@repo/core": "workspace:*"
  }
}
```

## 🏗 Building for Production

```bash
# Build all packages
pnpm build

# Preview the production build
pnpm --filter @repo/app preview
```

## 🎨 Code Quality

- **ESLint** - Configured with TypeScript, React, and React Hooks rules
- **Prettier** - Consistent code formatting across all files
- **TypeScript** - Strict mode enabled for maximum type safety

## 📦 Adding New Packages

1. Create a new directory in `packages/`
2. Initialize with `package.json` and `tsconfig.json`
3. The workspace will be automatically detected by pnpm

## 🤝 Contributing

1. Follow the existing code style
2. Run `pnpm lint` before committing
3. Ensure `pnpm type-check` passes
4. Format code with `pnpm format`

## 📄 License

MIT
