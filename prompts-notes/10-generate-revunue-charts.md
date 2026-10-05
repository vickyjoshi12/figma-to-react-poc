## Task: Implement the Revenue chart

The dashboard shell and all five dashboard sections are now implemented and validated.

The remaining chart areas are placeholders.

Implement ONLY the Revenue chart in this task.

### Read first

Read:

- `.github/copilot-instructions.md`
- `prompts-notes/design-contract.md`
- `src/types/dashboard.ts`
- `src/data/dashboardMockData.ts`
- `src/services/dashboardService.ts`
- `src/hooks/useDashboardData.ts`
- `src/features/dashboard/components/RevenuePanel.tsx`
- `src/features/dashboard/dashboard.css`

Also use the previously inspected Figma design:

File:
https://www.figma.com/design/G4D4tulIug9IkYjlNuPZHU/Dashboard--Community-?node-id=0-61

Revenue node:
`0:201`

### Chart library

Install and use:

`recharts`

Use the current stable Recharts release compatible with the project.

Do not add any other chart library.

### Goal

Replace ONLY the Revenue chart placeholder with a real Recharts bar chart.

Use:

`BarChart`

The Figma design shows two visual series:

- Last 6 days
- Last Week

Use the existing `RevenueData.currentSeries` and
`RevenueData.comparisonSeries` from the existing data layer.

Do not create a second source of chart data.

Do not hard-code chart data inside the chart component.

Maintain:

UI
↓
useDashboardData()
↓
dashboardService
↓
dashboardMockData

### Important data rule

The existing chart points are illustrative mock values because the underlying Figma chart data was not exposed.

Do not present them as real historical/business data.

Do not invent additional business calculations.

Do not alter the existing data model unless absolutely necessary.

### Figma visual requirements

Revenue chart region:

approximately:

`678 × 141`

The chart should fit inside the existing Revenue panel without changing the panel dimensions.

Match the Figma visual characteristics:

- compact chart
- minimal visual noise
- no large chart title inside the chart
- no visible Y-axis labels unless required for the visual
- minimal/no X-axis decoration if it is not visible in Figma
- subtle horizontal grid/divider treatment
- two series
- rounded bar appearance where supported
- chart should visually occupy the available chart region

The existing panel title, revenue amount, trend, date range, View Report button and legend are already implemented.

Do not duplicate them inside the chart.

### Colors

Use the design-contract colors already established.

Do not introduce arbitrary new colors.

The two series should visually correspond to the existing:

- `Last 6 days`
- `Last Week`

legend.

### Responsive behavior

The chart must fit its parent container.

Do not introduce fixed chart widths.

Use an appropriate responsive container strategy.

Do not create new responsive breakpoints.

### Accessibility

Give the chart an appropriate accessible label/description where practical.

Do not sacrifice the visual design to add unnecessary accessibility UI.

### Architecture

Create a dedicated component:

`RevenueBarChart.tsx`

Place it under:

`src/features/dashboard/components/`

The RevenuePanel should compose this component.

Keep chart-specific styling local to the chart component/CSS where appropriate.

Do not put chart logic into `DashboardContent`.

### Do NOT

Do not:

- implement Order Time chart
- implement Order chart
- modify Rating bubbles
- redesign any existing panel
- change the dashboard grid
- change sidebar/top bar
- change the data service
- invent new chart data
- install Chart.js
- install another chart library
- use page-level absolute positioning
- change unrelated files

### Validation

After implementation:

1. Run:

`npm.cmd run build`

2. Run:

`npm.cmd run lint`

3. Render at:

`1440 × 960`

4. Verify:
   - Revenue panel dimensions remain unchanged
   - chart stays within its chart region
   - no horizontal overflow
   - existing legend remains correct
   - both series are visible
   - chart does not overlap the revenue amount/date/legend
   - product images and other sections remain unchanged

5. Compare the Revenue chart visually with the Figma reference.

Report:

- files created/modified
- Recharts version installed
- chart implementation approach
- build result
- lint result
- any visual differences from Figma
- whether any assumptions were required

Do not implement any other charts.