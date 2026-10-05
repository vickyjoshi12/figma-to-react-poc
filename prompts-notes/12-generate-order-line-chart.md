# Implement Order Line Chart from Figma

Implement ONLY the final dashboard chart: the "Order" line chart.

Do not modify the Revenue chart or Order Time chart. Both are already implemented and visually acceptable.

## Before changing code

Read and understand these files first:

1. `.github/copilot-instructions.md`
2. `prompts-notes/design-contract.md`
3. `src/types/dashboard.ts`
4. `src/data/dashboardMockData.ts`
5. `src/services/dashboardService.ts`
6. `src/hooks/useDashboardData.ts`
7. `src/features/dashboard/components/OrdersPanel.tsx`
8. `src/features/dashboard/dashboard.css`

Also inspect the existing Revenue and Order Time chart implementations only to understand established patterns for:
- Recharts usage
- data flow
- chart container sizing
- styling
- responsive behavior

Do not copy their visual design blindly.

---

## Figma reference

The Order Stats section is:

- Figma node: `0:298`
- Target panel approximately: `362 × 322px`
- Target chart region approximately: `312 × 141px`

Use the existing Figma MCP connection to inspect node `0:298` and its available screenshot/context before coding.

Use the Figma node as the visual source of truth for details such as:

- line shape
- chart placement
- grid lines
- axis/tick visibility
- series appearance
- spacing
- relationship between chart and legend
- tooltip appearance, if clearly visible

Clearly distinguish confirmed Figma details from approximations.

If the Figma MCP inspection cannot establish an exact visual detail, do not invent it. Use the design contract and existing implementation patterns to make the smallest reasonable approximation and report what was confirmed versus approximated.

---

## Actual data flow

Follow the existing application data flow exactly:

`DashboardPage`
→ `useDashboardData()`
→ `DashboardContent`
→ `OrdersPanel`
→ `OrdersLineChart`

Do not bypass this flow.

Do not import `dashboardMockData` directly into `OrdersLineChart`.

Do not create another data source.

Do not duplicate the Orders data inside the chart component.

Do not add business calculations to the chart.

---

## Implementation

Create:

`src/features/dashboard/components/OrdersLineChart.tsx`

Create:

`src/features/dashboard/components/OrdersLineChart.css`

only if CSS is actually needed.

Update:

`OrdersPanel.tsx`

only as necessary to replace the existing chart placeholder with `OrdersLineChart`.

Touch:

`dashboard.css`

only if necessary to remove obsolete placeholder styling.

Do not make unrelated cleanup or refactoring changes.

Use the existing Recharts dependency.

---

## Chart

Use Recharts `LineChart`.

Use the existing Orders data supplied through the current component/data flow.

The Figma design contains two visual series:

- current period
- comparison period

Render the existing `currentSeries` and `comparisonSeries` from the Orders data.

Do not create additional series.

Do not create a new legend if the existing Orders panel already contains the external legend.

Keep the existing external legend.

Do not create a duplicate Recharts legend.

---

## Existing mock-data constraint

The existing Orders series currently contain three points each:

- `01`
- `03`
- `06`

Render the existing points exactly as provided.

Do NOT:

- add additional dates
- interpolate additional points
- generate synthetic points
- expand the dataset
- change the existing values
- invent historical data
- create additional chart points simply to make the graph look denser

The existing series are illustrative mock data because the exact underlying Figma chart dataset was not available.

The objective is to reproduce the Figma chart structure and visual treatment using the existing illustrative data.

Do not modify the underlying mock data to make the chart visually resemble the screenshot.

---

## Visual target

The Order panel contains:

`Order`

`2.568`

`↓ 2.1% vs last week`

`Sales from 1–6 Dec, 2020`

The chart appears below the metric information.

The chart should be compact and fit within approximately:

`312 × 141px`

The overall Order panel should remain approximately:

`362 × 322px`

Do not change the existing panel dimensions or dashboard grid.

Aim to reproduce the Figma visual treatment as closely as the available Figma evidence supports:

- compact line chart
- clean line geometry
- subtle horizontal grid lines
- no heavy chart borders
- no unnecessary decoration
- no unnecessary axis labels
- no excessive tick labels
- restrained dashboard styling
- existing dashboard colors
- no new color palette
- no gradients
- no large area fills unless clearly supported by the Figma reference

Use the current-series and comparison-series colors already established by the existing dashboard implementation unless the Order Stats Figma reference clearly shows otherwise.

---

## Tooltip

Inspect the Figma reference first.

If a tooltip is clearly part of the intended interaction, implement a compact custom tooltip consistent with the Figma design.

If the Figma screenshot only happens to capture a tooltip but does not establish an always-visible state, do NOT permanently display the tooltip.

A normal hover tooltip is acceptable.

Do not use a large/default Recharts tooltip that visually disrupts the compact dashboard.

Do not invent tooltip content.

Only display information available from the existing data model.

---

## Layout and responsiveness

Use the existing chart container.

Do not use a hard-coded chart width.

The chart should size itself according to its parent.

Do not use:

- page-level absolute positioning
- transform scaling
- artificial zoom/scaling
- `overflow-x: hidden` to conceal layout problems
- fixed widths that cause viewport overflow

Do not change:

- the 240px sidebar
- dashboard grid
- page shell
- navigation
- existing panel dimensions

The chart must not introduce horizontal overflow.

---

## Architecture rules

Follow `.github/copilot-instructions.md`.

In particular:

- reuse existing components and styles where appropriate
- keep data separate from presentation
- use TypeScript
- keep chart-specific logic inside the chart component
- do not introduce unnecessary abstractions
- do not create a generic chart framework for this task
- do not add another chart library
- do not fabricate APIs
- do not change unrelated files
- preserve existing component boundaries

---

## Important: do not invent missing Figma information

If Figma MCP does not provide enough information to determine:

- exact line values
- exact point density
- exact axis labels
- exact tooltip behavior
- exact chart interaction

then do not guess by changing the dataset or inventing business data.

Use the existing mock data and make only visual approximations that are supported by the available Figma evidence.

At the end, explicitly report which chart characteristics were:

1. confirmed from Figma
2. taken from the existing design contract
3. approximated because the source did not provide enough information

---

## Do not touch

Do not modify:

- `RevenueBarChart.tsx`
- `RevenueBarChart.css`
- `RevenuePanel.tsx`
- `OrderTimeDonutChart.tsx`
- `OrderTimeDonutChart.css`
- Revenue mock data
- Order Time mock data
- dashboard shell
- sidebar
- navigation
- other dashboard panels
- unrelated CSS
- unrelated components

Only make the minimum changes required for the Order line chart.

---

## Validation

After implementation run:

```text
npm.cmd run build