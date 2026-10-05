## Task: Implement the five dashboard sections

The dashboard shell/layout is now complete and the horizontal overflow issue has been fixed.

Now implement the actual content structure of the five dashboard sections shown in the Figma design.

### Read first

Before making changes, read:

- `.github/copilot-instructions.md`
- `prompts-notes/design-contract.md`
- `src/types/dashboard.ts`
- `src/data/dashboardMockData.ts`
- `src/services/dashboardService.ts`
- `src/hooks/useDashboardData.ts`

Use the previously inspected Figma design:

File:
https://www.figma.com/design/G4D4tulIug9IkYjlNuPZHU/Dashboard--Community-?node-id=0-61

Primary frame:
`0:61`

Target:
1440 × 960

Do not make additional Figma MCP calls unless necessary. The design contract already contains the inspected node measurements and visual properties.

---

# Goal

Implement the visual/content structure of these five sections:

1. Revenue
2. Order Time
3. Your Rating
4. Most Ordered Food
5. Order

The chart/visualization internals should remain placeholders for now.

We will implement the charts separately after validating the section layout.

---

# 1. Revenue section

Use the existing dashboard data through `useDashboardData()`.

Implement:

- Section title: `Revenue`
- Revenue value: `IDR 7.852.000`
- Trend:
  - `+2.1%`
  - `vs last week`
  - positive styling
- Date range:
  - `Sales from 1–12 Dec, 2020`
- `View Report` button
- Chart region placeholder
- Legend:
  - `Last 6 days`
  - `Last Week`

Figma contract:

- approximately 678 × 322
- chart region approximately 678 × 141
- report button approximately 109 × 32

Do not implement the actual revenue chart yet.

---

# 2. Order Time section

Implement:

- Section title: `Order Time`
- Chart region placeholder
- Legend:
  - Afternoon 40%
  - Evening 32%
  - Morning 28%
- Preserve the section dimensions and spacing from the design contract.
- Preserve the tooltip space/visual region shown in Figma, but do not implement tooltip interaction yet.

Figma contract:

- approximately 362 × 322
- tooltip visual region approximately 140 × 109

Do not implement the donut chart yet.

---

# 3. Your Rating section

Implement:

- Section title: `Your Rating`
- Three rating metrics:
  - Hygiene: 85%
  - Packaging: 92%
  - Food Taste: 85%
- Recreate the overlapping circular/bubble composition from Figma as closely as possible.
- Use local CSS positioning only inside this rating visualization area if required.
- Do not use page-level absolute positioning.

Figma contract:

- approximately 313 × 321
- rating bubbles approximately:
  - 104px
  - 123px
  - 169px

The bubble visualization is part of this section's visual structure, but do not introduce unnecessary chart libraries.

---

# 4. Most Ordered Food section

Implement:

- Section title: `Most Ordered Food`
- Four product rows:
  - Fresh Salad Bowl
  - Chicken Noodles
  - Smoothie Fruits
  - Hot Chicken Wings
- Product thumbnail
- Product name
- Product price
- Correct spacing and alignment

Use the actual downloaded Figma product assets already present in:

`src/assets/`

Use the existing `ProductRow` component where appropriate.

Figma contract:

- approximately 312 × 310
- four rows
- thumbnails approximately 28 × 28

Do not invent new product data.

---

# 5. Order section

Implement:

- Section title: `Order`
- Order count: `2.568`
- Trend:
  - `2.1%`
  - down/negative styling
- Date range:
  - `1–6 Dec, 2020`
- `View Report` button
- Chart region placeholder
- Legend/series labels as present in the existing mock data/design contract

Do not implement the actual line chart yet.

Figma contract:

- approximately 362 × 322
- chart grid approximately 312 × 141

---

# Layout requirements

Preserve the dashboard layout established in the previous task.

At 1440 × 960:

- Sidebar remains 240px.
- Main dashboard composition should match the Figma proportions.
- Upper row:
  - Revenue
  - Order Time
- Lower row:
  - Your Rating
  - Most Ordered Food
  - Order

Use CSS Grid for these major sections.

Do not use page-level absolute positioning.

Local absolute positioning is acceptable only for:

- rating bubbles
- chart placeholder internals
- other small visual elements where necessary

Do not create a generic Card component simply to wrap every section.

Create meaningful section components where each section has its own visual/content responsibility.

Suggested components:

- RevenuePanel
- OrderTimePanel
- RatingPanel
- MostOrderedPanel
- OrdersPanel

Adjust these names if the existing architecture has a better equivalent.

---

# Data architecture

All displayed values must come from:

`useDashboardData()`

Do NOT import:

- `dashboardMockData`
- `dashboardService`

directly into UI components.

Maintain:

```text
UI
↓
useDashboardData()
↓
dashboardService
↓
dashboardMockData