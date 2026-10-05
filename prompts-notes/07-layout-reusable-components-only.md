## Task: Build the Dashboard UI foundation

Before making changes, read:

- .github/copilot-instructions.md
- prompts-notes/design-contract.md
- src/types/dashboard.ts
- src/data/dashboardMockData.ts
- src/services/dashboardService.ts
- src/hooks/useDashboardData.ts

Use the Figma MCP context for the dashboard frame:

Figma file:
https://www.figma.com/design/G4D4tulIug9IkYjlNuPZHU/Dashboard--Community-?node-id=0-61

Primary dashboard node:
0:61

### Goal

Implement only the reusable UI foundation and overall dashboard layout.

Do NOT implement the charts yet.

### Build

Create the minimum meaningful components needed for:

1. DashboardLayout
   - overall two-region page structure
   - 240px sidebar
   - main content area
   - use CSS Grid for the overall layout

2. DashboardSidebar
   - logo/brand area
   - eight navigation items from the mock data
   - active Dashboard item
   - navigation icons
   - use Flexbox for navigation rows
   - do not invent icon packages or dependencies

3. DashboardTopBar
   - search area
   - account/user area
   - notification control
   - match the Figma dimensions and typography where confirmed

4. Shared UI primitives only where meaningful reuse exists:
   - SectionLabel
   - ReportButton
   - MetricChange
   - LegendItem
   - ProductRow

Do not create a generic Card component unless you can demonstrate meaningful reuse from the actual dashboard implementation.

### Layout

Match the Figma desktop composition at:

1440 × 960

Use:

- CSS Grid for page-level and major dashboard layout
- Flexbox for navigation, top-bar content, rows and repeated horizontal elements
- normal document flow for text/content
- local absolute positioning only where it is genuinely required by a visual element

Do NOT reproduce Figma's positioned groups as page-level absolute positioning.

### Styling

Use the confirmed design-contract values:

- Poppins
- sidebar: #F1F2F7
- search background: #F6F6FB
- primary text: #1F384C
- secondary text: #273240
- report/action color: #5A6ACF
- positive: #149D52
- negative: #F2383A
- secondary gray: #737B8B

Match the confirmed typography and dimensions from the design contract.

Do not invent a large design-token system because the Figma file does not expose named variables/tokens.

Small reusable CSS variables for genuinely repeated values are acceptable if useful.

### Data

The UI must obtain dashboard data through:

useDashboardData()

Do not import dashboardMockData directly into components.

Do not bypass the service/hook boundary.

Use the navigation data from the hook for the sidebar.

### Icons and assets

Do not install an Iconly npm package.

The Figma source identifies Iconly instances, but the exact package/source is not confirmed.

For this stage, use an appropriate local placeholder strategy or existing project assets without inventing an external dependency.

Do not spend time solving the final icon asset mapping yet.

### Important boundaries

Do not:

- implement charts
- implement chart data transformations
- add API endpoints
- add authentication
- invent responsive breakpoints
- invent business logic
- add routing
- modify unrelated files
- install dependencies unless absolutely required

The first target is the desktop Figma composition at 1440 × 960.

### App integration

Update the existing app entry only as necessary to render the dashboard layout.

Do not preserve the Vite starter UI.

The result should render the dashboard shell and content placeholders/section containers, but chart internals can remain placeholder areas for now.

### Quality

After implementation:

1. Run TypeScript/build validation.
2. Run lint if configured.
3. Check that the dependency direction remains:

UI
↓
useDashboardData
↓
dashboardService
↓
dashboardMockData

4. Report exactly which files were created/modified.
5. Do not modify files unrelated to this task.

Do not create charts yet.