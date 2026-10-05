# Figma Design Contract

We are building an engineering-grade Figma-to-React POC.

Use the connected Figma MCP context to inspect the current Figma design again.

Create a detailed design contract that can be used by an engineer to implement the screen in React + TypeScript.

Do not implement any React code yet.

Inspect the Figma node-level information, rendered reference, metadata, variables/styles, components, instances, assets and layout information where available.

The design contract should include:

## 1. Screen information

- Figma file information
- Relevant node IDs
- Screen/frame dimensions
- Available desktop/tablet/mobile variants
- Whether responsive behavior is explicitly specified

## 2. Page structure

Identify every major section and provide:

- Section name
- Figma node ID
- Approximate dimensions
- Position
- Purpose
- Whether it appears reusable
- Evidence for reuse if available

Do not assume that visually similar sections are reusable components unless the Figma evidence supports that conclusion.

## 3. Reusable patterns

Identify repeated patterns such as:

- Navigation items
- Buttons
- Metric changes
- Legends
- Product rows
- Icons
- Search controls
- Dividers
- Other repeated structures

For each pattern explain why it should or should not become a React component.

## 4. Typography

Capture available:

- Font family
- Font size
- Font weight
- Line height
- Letter spacing
- Text color
- Opacity

Distinguish exact Figma values from estimates.

## 5. Colors and design tokens

Capture:

- Background colors
- Text colors
- Border colors
- Accent colors
- Status/trend colors
- Chart colors

Check whether Figma exposes actual variables or named styles.

Do not invent a token system if Figma does not expose one.

## 6. Spacing and dimensions

Capture important:

- Padding
- Gaps
- Margins
- Widths
- Heights
- Border radii
- Shadows

Again, distinguish confirmed values from approximations.

## 7. Assets

Identify:

- Icons
- Images
- Avatars
- Logos
- Product images
- SVG/vector assets
- External library components

Identify their source where Figma exposes it.

Do not invent package/library names if they cannot be confirmed.

## 8. Charts and visualizations

For every chart identify:

- Chart type
- Visible labels
- Data shown in the design
- Legend
- Tooltip
- Axis/grid information
- Colors
- Whether the data appears to be mock/sample data
- What is visual styling versus actual data semantics

Do not infer business calculations from the chart.

## 9. Data contract

Identify the visible data and propose TypeScript interfaces that could represent it.

Keep the data model separate from the UI implementation.

Do not invent API endpoints or backend behavior.

## 10. React architecture recommendation

Recommend a maintainable React structure.

Consider:

- Page/layout components
- Feature components
- Shared UI components
- Chart components
- Hooks
- Services
- Mock data
- Types
- Styling

Prefer meaningful component boundaries rather than creating a component for every Figma frame/group.

## 11. Layout strategy

Recommend whether each major area should use:

- CSS Grid
- Flexbox
- Normal document flow
- Local absolute positioning

Do not use absolute positioning for the overall page layout unless Figma evidence makes it genuinely necessary.

Local absolute positioning may be appropriate for things such as chart tooltips or overlapping chart elements.

## 12. Responsive behavior

Only document responsive behavior that is explicitly available in Figma.

If no responsive specification exists, clearly state that.

Do not invent breakpoints.

## 13. Engineering boundaries

Clearly separate:

### Design-defined

Things directly represented by Figma.

### Engineering-defined

Things that must be decided by the React application.

### Unknown / AI-inferred

Things that cannot be determined reliably from Figma.

## 14. Risks and ambiguities

Identify anything that could cause problems during implementation, such as:

- Missing design tokens
- Missing responsive designs
- Generic Figma naming
- Unknown component libraries
- Unknown asset sources
- Ambiguous interactions
- Charts without semantic data
- Absolute-positioned Figma groups
- Missing Code Connect information

## 15. Implementation plan

Provide a recommended implementation sequence from:

Figma inspection
→ architecture
→ reusable components
→ mock data
→ service abstraction
→ hooks
→ page implementation
→ visual validation

Important:

Do not implement anything.

The output should be a reliable engineering contract for the React implementation.