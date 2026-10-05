We are now implementing the data layer for the dashboard POC.

Before making changes, read:

1. .github/copilot-instructions.md
2. prompts-notes/design-contract.md
3. The existing Vite/React/TypeScript project structure

Use the design contract as the source for the dashboard's visible data model.

Create only these files:

src/types/dashboard.ts
src/data/dashboardMockData.ts
src/services/dashboardService.ts
src/hooks/useDashboardData.ts

Do not create or modify any UI components yet.
Do not modify App.tsx.
Do not modify App.css or index.css.
Do not install dependencies.
Do not create API endpoints.
Do not create chart components.

Requirements:

### 1. src/types/dashboard.ts

Create TypeScript interfaces/types for the dashboard data contract.

Use the contracts from the design contract where appropriate:

- TrendData
- ChartPoint
- RevenueData
- OrderTimeSegment
- RatingMetric
- ProductData
- OrdersData
- NavigationItemData
- DashboardData

Keep the types focused on data contracts rather than UI implementation details.

Use appropriate literal types where the design contract supports them.

### 2. src/data/dashboardMockData.ts

Create static mock data matching the visible information in the Figma dashboard.

Use the values from the design contract.

Important:

- Treat all Figma values as sample/mock data.
- Do not invent business calculations.
- Do not invent additional dashboard features.
- For chart series where the Figma design does not expose reliable underlying data points, use only a minimal representative dataset and clearly keep it as mock data.
- Do not claim that the chart values represent real business calculations.
- Keep mock data separate from components.

Use the existing ProductData, RevenueData, OrderTimeSegment, etc. types.

### 3. src/services/dashboardService.ts

Create a small service abstraction that returns DashboardData.

For the POC, this service should return the static mock data.

Design it so that a future real API implementation could replace the mock implementation without requiring dashboard components to know where the data comes from.

Do not create a fake HTTP request or fake endpoint.

The service can be asynchronous if that creates a clean future API boundary, but do not add artificial loading delays.

### 4. src/hooks/useDashboardData.ts

Create a React hook that connects the UI layer to dashboardService.

The hook should expose the dashboard data in a clean way.

If the service is asynchronous, handle the basic data state appropriately, but do not over-engineer loading/error handling for this POC.

Do not add business logic to the hook.

### Architecture rule

The intended dependency direction is:

UI components
    ↓
useDashboardData
    ↓
dashboardService
    ↓
dashboardMockData

Types should be shared by the appropriate layers.

Do not make UI components import dashboardMockData directly.

Do not make UI components import dashboardService directly.

### Quality requirements

- TypeScript must compile without errors.
- Avoid unnecessary type assertions.
- Do not duplicate types.
- Do not add unnecessary abstractions.
- Keep the implementation small and understandable.
- Follow the repository's existing conventions.

After implementation:

1. Run the appropriate TypeScript/typecheck command.
2. Show the files created.
3. Show the final dependency flow.
4. Briefly explain any assumptions made about chart data.
5. Confirm that no UI files were modified.