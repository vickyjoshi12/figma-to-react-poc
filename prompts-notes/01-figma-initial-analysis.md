# Figma Initial Analysis

We are preparing an engineering-grade Figma-to-React POC. Inspect the connected Figma design and produce an evidence-based engineering analysis and design-handoff review.

## Figma input

- Figma file URL: `https://www.figma.com/design/G4D4tulIug9IkYjlNuPZHU/Dashboard--Community-?node-id=0-61`
- Primary frame/node: `0:61`
- Target frame size: `1440 × 960`

Use the provided URL and node as the starting point. Inspect the rendered reference and relevant node-level context. Inspect child nodes when needed to verify important measurements, chart details, assets, or component behavior.

If the file or node is inaccessible, report the access limitation and do not present unverified assumptions as Figma facts. State which observations are directly confirmed, estimated from the rendered reference, or unknown.

## Analysis goals

Analyse the design from an engineering and handoff-readiness perspective rather than simply describing the screenshot.

Identify:

1. Overall page structure and layout
2. Main sections, node IDs, positions, and dimensions where available
3. Repeated visual patterns that may merit reusable React components, with evidence for reuse
4. Typography, colors, spacing, borders, radii, shadows, and other visible properties
5. Icons, images, and other assets, including their sources where Figma exposes them
6. Charts and visualizations: chart types, series, labels, legends, axes, grids, tooltips, visible values, and unavailable underlying data
7. Visible content and data, with potential TypeScript data structures where useful
8. Suitable React layout strategies using CSS Grid, Flexbox, normal flow, or local positioning
9. Responsive variants or behavior only if explicitly represented in the Figma file
10. Components, instances, libraries, variables/styles, and Code Connect information where available
11. Ambiguities, implementation risks, and anything that cannot be reliably determined
12. Evidence-backed opportunities to improve the Figma design or engineering handoff

## Evidence and certainty

For material observations, indicate the evidence source and certainty:

- **Confirmed:** directly available in node properties, variables/styles, component metadata, or explicit design content.
- **Estimated:** inferred from the rendered reference or approximate measurements.
- **Unknown:** not exposed or not reliably determinable.

Keep design observations distinct from engineering recommendations. Do not describe a recommendation as an existing design requirement.

Do not invent business logic, API behavior, chart semantics, responsive behavior, component-library sources, asset origins, or design tokens. If information is not exposed, mark it as unknown and explain its implementation impact where relevant.

## Figma improvement backlog

Provide a concise, actionable list of changes that could make the Figma design or handoff more complete for implementation with AI tools.

Only recommend changes when supported by an observed gap or ambiguity that could cause implementation inconsistency, incorrect behavior, or avoidable rework. Do not suggest arbitrary aesthetic redesigns, and do not frame absent optional documentation as a visual defect.

For each recommendation include:

- **Priority:** P0 (blocks or risks correctness), P1 (important for reliable implementation), or P2 (useful future improvement)
- **Figma area/node:** identify the affected section or node; use “file-wide” only when appropriate
- **Observed gap:** the evidence-backed missing or ambiguous information
- **Recommended Figma update:** a concrete action a designer can take
- **Implementation impact:** what could go wrong or require a guess if it remains unresolved
- **Confidence:** high, medium, or low, with a brief reason
- **Timing:** needed before implementation, or a future improvement

Consider handoff concerns such as missing responsive variants, unclear chart values or interaction states, missing named styles/variables, unavailable asset mappings, inconsistent measurements, and unspecified font availability—but include them only when the inspected design supports the concern.

If no evidence-backed Figma improvements are identified, explicitly say: **No evidence-backed Figma changes identified.**

## Important rules

- Do not blindly convert every Figma frame or group into a React component.
- Identify meaningful reusable components based on responsibility and repeated use.
- Do not infer business calculations or data semantics from visual chart shapes.
- Do not invent responsive behavior or breakpoints when they are not shown in Figma.
- Distinguish design-defined details from engineering choices and unknowns.
- Prefer CSS Grid and Flexbox for page layout instead of reproducing Figma absolute positioning.
- Treat charts as visual components that should receive data from a separate data layer.
- Flag decisions that need clarification; do not silently guess when correctness depends on the answer.
- Do not implement the React application or modify any files.

## Required report format

### 1. Executive summary

Summarize the screen, primary implementation considerations, and overall handoff readiness.

### 2. Design facts and page structure

Describe the screen and major sections. Include node IDs, dimensions, positions, and certainty where available.

### 3. Reusable patterns and implementation considerations

List evidence-backed patterns and recommend suitable React/layout approaches without prescribing unnecessary components.

### 4. Visual system, assets, and charts

Summarize typography, colors, spacing, visual properties, assets, chart structure, and visible data. Identify unavailable values and interactions.

### 5. Data and architecture considerations

Suggest data-contract concepts and a maintainable React architecture at a high level. Do not specify invented endpoints or business rules.

### 6. Unknowns, assumptions, and risks

List unresolved questions and implementation risks. Distinguish confirmed facts from estimates and unknowns.

### 7. Prioritized Figma improvement backlog

Use a table with these columns:

| Priority | Figma area/node | Observed gap | Recommended Figma update | Implementation impact | Confidence | Timing |
|---|---|---|---|---|---|---|

If there are no evidence-backed recommendations, state that explicitly instead of filling the table with speculative items.

### 8. Recommended implementation sequence

Give a concise sequence from Figma inspection and clarification through architecture, data boundaries, implementation, and visual validation.

### 9. Inspection limitations

Record any inaccessible nodes, unavailable metadata/assets, rate limits, or other constraints that limited verification.

Do not implement anything. The report should be concise enough to scan but detailed enough to guide implementation and prioritize Figma handoff improvements.
