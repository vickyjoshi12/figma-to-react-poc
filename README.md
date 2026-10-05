# Figma-to-React Dashboard POC

A React and TypeScript dashboard proof of concept based on the Goodfood dashboard design in Figma. The current screen includes the dashboard shell, five dashboard sections, and Revenue, Order Time, and Order charts.

## How this project was built

This POC was built using AI development tools: GitHub Copilot in VS Code, connected to the Figma design through the Figma MCP server. The implementation was developed from the Figma reference and the engineering prompts in `prompts-notes/`.

## Design reference

- [Open the dashboard in Figma](https://www.figma.com/design/G4D4tulIug9IkYjlNuPZHU/Dashboard--Community-?node-id=0-61)
- Figma file: `G4D4tulIug9IkYjlNuPZHU`
- Primary dashboard frame: `0:61` (1440 × 960)
- Revenue panel: `0:201`
- Order Time panel: `0:172`
- Order Stats panel: `0:298`
- Design notes and inspected properties: [`prompts-notes/design-contract.md`](prompts-notes/design-contract.md)

The Figma file is the visual reference. It does not define responsive variants; the first target is the 1440 × 960 desktop composition.

## Features

- Dashboard sidebar, top bar, and five content sections.
- Revenue bar chart, Order Time donut chart, and Order line chart, implemented with Recharts.
- Product rows use local thumbnail assets in `src/assets/`.
- Dashboard values are served from static mock data; this POC has no backend or API integration.

## Data flow

```text
DashboardPage
  → useDashboardData()
    → dashboardService
      → dashboardMockData
  → DashboardContent
    → dashboard section components and charts
```

Shared dashboard data contracts are in `src/types/dashboard.ts`. UI components receive data through props and should not import the mock data or service directly.

Chart point values are illustrative mock values, not verified historical or business data. In particular, the Figma design shows the visual chart structure but does not expose the original underlying series. Do not interpret the mock values as business calculations.

## Tech stack

- React 19
- TypeScript
- Vite
- Recharts
- ESLint

## Getting started

Requirements: Node.js and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal (normally `http://localhost:5173`).

## Validation commands

Production build and TypeScript project checks:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

Serve a production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
  assets/                         Local images and product thumbnails
  components/ui/                  Shared UI primitives
  data/                           Static dashboard mock data
  features/dashboard/
    components/                   Dashboard sections and chart components
    config/                       Dashboard feature configuration
    dashboard.css                 Dashboard layout and shared feature styles
  hooks/                          UI-to-service data hook
  layouts/                        Shared page shell
  pages/                          Page-level composition
  services/                       Dashboard data service boundary
  styles/                         Global/shared styles
  types/                          Shared TypeScript data contracts
```
