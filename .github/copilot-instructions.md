# Copilot Instructions

## Project principles
- Use React and TypeScript. Preserve the repository's existing framework, tooling, naming, formatting, styling, and testing conventions.
- Inspect relevant source files and project configuration before changing code. Keep changes focused; do not modify unrelated files.
- Keep code type-safe and lint-clean. Run available typecheck, lint, and test commands when appropriate. Do not suppress failures or disable rules to make checks pass; fix underlying issues where practical.

## Figma-to-React workflow
- Before implementing or updating a Figma design, inspect its current Figma MCP context and rendered reference. Prefer node-level information over visual guesses.
- Treat Figma as the source of visual intent—structure, measurements, typography, colors, assets, and visible content—not business logic.
- Do not infer business rules, API behavior, authentication, data fetching, or interaction requirements from visual design.
- Do not invent design tokens, asset sources, chart semantics, or visual properties that Figma does not expose. Clearly identify unknowns. If missing information materially affects correctness, ask for clarification; otherwise make the smallest reasonable assumption and document it.
- Do not invent responsive behavior when the Figma source does not specify responsive variants or breakpoints.
- Before editing code for a Figma change, identify the affected component or feature. Make the smallest reasonable localized change; do not regenerate an entire page when a localized update is sufficient.
- Preserve existing component APIs, business logic, data services, tests, and unrelated styling unless the Figma change explicitly requires modifying them.

## React architecture
- Before creating a component, inspect the codebase for equivalent or reusable components. Prefer extending or composing existing components over creating duplicates; do not create components with the same responsibility under different names.
- Reuse existing design tokens, CSS variables, theme values, and shared styles. Avoid duplicate tokens and repeated hard-coded values. If no token system exists and Figma exposes no named tokens, do not invent a large token system for one screen; introduce shared values only where usage is clearly repeated.
- Create reusable components where repetition is meaningful, not merely because a Figma group or frame exists. Choose boundaries based on responsibility, reuse, and clarity.
- Avoid giant components and unnecessary component fragmentation. Keep components cohesive and understandable.
- Use TypeScript types or interfaces for data contracts and component props. Avoid untyped data and unnecessary type assertions.
- Use semantic HTML and accessible names, labels, keyboard interactions, focus states, and appropriate ARIA attributes.
- Prefer CSS Grid for two-dimensional page and section layouts, and Flexbox for one-dimensional alignment and repeated rows. Do not reproduce Figma absolute positioning as the overall page layout; reserve it for local details that genuinely require overlap or precise placement, such as chart annotations or tooltips.

## Data and services
- Keep data access behind a service or API abstraction, and use hooks to connect UI components to that data layer.
- Use static mock data behind the same abstraction during the POC. Keep business and data logic separate from presentation, and treat mock values as sample data unless confirmed otherwise.
- Do not fabricate endpoints, response shapes, loading or error behavior, or business calculations. Implement only confirmed requirements; surface uncertainty according to its impact on correctness.

## Visual validation
- Validate the requested screen against the Figma reference at the specified frame size, checking layout, spacing, typography, colors, assets, image crops, and chart appearance.
- Distinguish confirmed Figma properties from approximations. Do not claim fidelity for properties or behavior that could not be inspected.
- Keep validation scoped to the requested screen or component; do not alter unrelated areas to address out-of-scope differences.
