Implement ONLY the second dashboard chart: the "Order Time" donut chart.

Do not modify the Revenue chart or any other dashboard section.

Before changing code, read:
1. .github/copilot-instructions.md
2. prompts-notes/design-contract.md
3. src/types/dashboard.ts
4. src/data/dashboardMockData.ts
5. src/services/dashboardService.ts
6. src/hooks/useDashboardData.ts
7. src/features/dashboard/components/OrderTimePanel.tsx
8. src/features/dashboard/dashboard.css
9. The existing RevenueBarChart implementation only as a pattern for data flow, not as a visual template.

IMPORTANT ARCHITECTURE RULES

Keep the existing data flow:

UI component
→ useDashboardData()
→ dashboardService
→ dashboardMockData

Do not import mock data directly into the chart.

Do not create a second data source.

Do not hard-code the 40/32/28 values inside the chart component if those values already exist in the dashboard data.

Do not invent new business calculations.

Do not modify the existing Revenue chart.

Do not modify the Revenue data just to make this chart work.

CHART TO IMPLEMENT

Create:

src/features/dashboard/components/OrderTimeDonutChart.tsx

and, if needed:

src/features/dashboard/components/OrderTimeDonutChart.css

Use Recharts, which is already installed.

Use a Recharts PieChart/Pie configured as a donut.

Use the existing Order Time data from the dashboard hook.

The Figma design contract defines:

Afternoon = 40%
Evening = 32%
Morning = 28%

These are the confirmed displayed percentages.

VISUAL TARGET

The Order Time panel is approximately:

362px × 322px

The chart should occupy the existing chart area without changing the panel dimensions or overall dashboard layout.

Match the Figma design as closely as possible:

- donut rather than a full pie
- compact donut size
- no unnecessary axes
- no default Recharts legend
- no default Recharts tooltip styling
- no chart title generated inside the chart
- preserve the existing panel heading and "View Report" button
- preserve the existing external legend below the chart
- do not duplicate the legend inside the chart
- keep the existing Figma colors/design language
- avoid visual clutter

TOOLTIP

The Figma design shows an Afternoon tooltip approximately like:

Afternoon
1pm–4pm

1.890 orders

The existing data model contains optional timeRange and orderCount fields.

If those values are available through the existing data layer, use them.

Do NOT invent different order counts.

If Recharts' default tooltip does not match the Figma design, create a small custom tooltip component.

The tooltip should visually resemble the Figma tooltip:

- dark purple background
- rounded corners
- white primary text
- muted secondary text
- compact dimensions
- appropriate padding
- no browser/default tooltip styling

IMPORTANT:

Do not make the tooltip permanently visible just because it is visible in the static Figma screenshot.

The Figma screenshot is visual reference only.

If the existing application has no interaction state, implement a normal chart hover tooltip and let the browser initially show the chart without an active tooltip.

DONUT GEOMETRY

Use Recharts' Pie component.

Prefer a centered donut with:

- innerRadius producing a substantial hole
- outerRadius sized to fit the existing chart area
- no labels around the circumference
- no leader lines
- no default labels

Do not use absolute positioning for the dashboard layout.

Local positioning inside the chart is acceptable if required for the tooltip.

COLORS

Use the existing design colors from the Figma contract and existing dashboard styles.

Do not introduce a new color palette.

The current Figma contract identifies the relevant dashboard colors, including:

#5A67BA
#737B8B

and the existing muted dashboard colors.

Inspect the existing CSS before choosing the final series colors.

DATA

Use the existing:

orderTime

data.

Expected data:

Afternoon 40%
Evening 32%
Morning 28%

Do not create duplicate constants inside the chart.

RESPONSIVENESS

Use the existing panel/chart container dimensions.

The chart must adapt to its parent rather than using a hard-coded pixel width.

Do not introduce horizontal overflow.

Do not use transform scaling.

Do not use overflow-x: hidden to hide problems.

Do not change the 240px sidebar.

Do not change the dashboard grid.

DO NOT TOUCH

Do not modify:

- RevenueBarChart.tsx
- RevenueBarChart.css
- RevenuePanel.tsx
- Revenue mock chart values
- Revenue layout
- MostOrderedPanel
- RatingPanel
- OrdersPanel
- dashboard shell
- navigation
- existing data architecture

Only modify Order Time-related files and the minimum required integration point.

VALIDATION

After implementation:

1. Run:
   npm.cmd run build

2. Run:
   npm.cmd run lint

3. Open the dashboard at 1440 × 960.

4. Verify:
   - no horizontal overflow
   - Order Time panel remains approximately 362 × 322
   - donut fits within the intended chart area
   - existing legend remains visible
   - Afternoon = 40%
   - Evening = 32%
   - Morning = 28%
   - tooltip works on hover
   - no duplicate legend
   - Revenue chart is unchanged
   - other chart placeholders remain unchanged

5. Do not make unrelated cleanup changes.

At the end, report:
- files created
- files modified
- whether Revenue files were untouched
- build result
- lint result
- Order Time chart dimensions
- whether 1440 × 960 has horizontal overflow
- whether the three percentages come directly from the existing data layer