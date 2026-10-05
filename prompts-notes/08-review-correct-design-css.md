## Task: Diagnose and fix dashboard horizontal overflow

The dashboard shell has now been implemented, but the current browser render visibly shows a horizontal scrollbar and content extending beyond the viewport.

Do NOT implement charts yet.

Read:

- .github/copilot-instructions.md
- prompts-notes/design-contract.md
- src/pages/DashboardPage.tsx
- src/layouts/DashboardLayout.tsx
- src/features/dashboard/components/DashboardSidebar.tsx
- src/features/dashboard/components/DashboardTopBar.tsx
- src/features/dashboard/components/DashboardContent.tsx
- src/features/dashboard/components/dashboard.css
- src/App.css
- src/index.css

Also inspect the Figma node:

- File: G4D4tulIug9IkYjlNuPZHU
- Node: 0:61
- Target design: 1440 × 960

### Problem

The current browser render has:

- visible horizontal scrollbar
- right-side dashboard content partially outside the viewport
- some content appears clipped horizontally

Do NOT solve this by simply adding:

- overflow-x: hidden
- clipping
- transforms
- scaling the entire dashboard

Those would hide the underlying layout problem.

### Diagnose first

Identify exactly which element is causing horizontal overflow.

Check:

- page shell width
- sidebar width
- main content width
- main content padding
- grid column widths
- grid gaps
- min-width values
- fixed widths
- flex children that cannot shrink
- box-sizing
- search width
- top-bar width
- dashboard section widths
- any `width: 100%` combined with padding
- any minimum content widths
- whether grid tracks are using fixed pixel widths unnecessarily

Use the browser/Playwright if available to determine:

- viewport width
- document scrollWidth
- document clientWidth
- the element(s) whose bounding boxes extend beyond the viewport

### Important design constraint

The Figma design is 1440px wide with:

- sidebar: 240px
- main content: remaining available width

The implementation must preserve the Figma composition at 1440px.

The sidebar should remain 240px.

The main content should consume the remaining available width rather than forcing a wider fixed page.

Use CSS Grid/Flexbox appropriately.

For major dashboard sections, avoid a grid definition that requires more width than the available main-content area.

Use patterns such as:

- `minmax(0, 1fr)` where appropriate
- `min-width: 0` on grid/flex children where needed
- content-aware sizing
- responsive shrinking within the desktop layout

Do not invent mobile/tablet breakpoints. We are still targeting the Figma desktop design.

### Important

Do NOT make broad unrelated refactors.

Only change the files necessary to fix the layout.

After fixing:

1. Run `npm.cmd run build`
2. Run `npm.cmd run lint`
3. Start the dev server.
4. Set the browser viewport explicitly to 1440 × 960.
5. Measure:
   - document.documentElement.clientWidth
   - document.documentElement.scrollWidth
   - document.documentElement.clientHeight
   - document.documentElement.scrollHeight
6. Confirm horizontal scrollWidth equals clientWidth, or explain any remaining difference.
7. Capture/inspect the 1440 × 960 render.

Also test the current browser viewport width if different from 1440.

### Return

Report:

1. Root cause of horizontal overflow
2. Exact files changed
3. Exact layout correction made
4. Before/after viewport measurements
5. Whether horizontal overflow is completely resolved
6. Build result
7. Lint result

Do not implement charts.