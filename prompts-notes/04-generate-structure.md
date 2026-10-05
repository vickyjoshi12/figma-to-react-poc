We are now starting the React implementation of the Figma-to-React POC.

The repository is a fresh Vite + React + TypeScript project.

We already have:
1. A Figma MCP connection
2. A detailed Figma design contract for the dashboard
3. .github/copilot-instructions.md containing the engineering rules

Before writing application code, inspect:
- .github/copilot-instructions.md
- The existing Vite project structure
- The connected Figma MCP context for the dashboard

Do not implement the dashboard yet.

Instead, create the initial maintainable project architecture based on the design contract.

Use this target structure as a starting point, but adjust it if the existing Vite project or Figma contract provides a better reason:

src/
  components/
    ui/
  features/
    dashboard/
      components/
      config/
    charts/
  layouts/
  pages/
  hooks/
  services/
  data/
  types/
  styles/

Requirements:

1. Use React + TypeScript.
2. Keep the architecture feature-oriented where appropriate.
3. Keep reusable UI components separate from dashboard-specific components.
4. Keep chart components separate from dashboard sections.
5. Keep mock data separate from components.
6. Keep TypeScript data contracts separate from mock data.
7. Keep data access behind a service abstraction.
8. Keep hooks between UI and the data/service layer.
9. Do not create components merely because a Figma frame or group exists.
10. Do not create unnecessary abstractions.
11. Do not add a generic Card component unless there is clear evidence it is useful.
12. Do not add responsive behavior yet because the current Figma design does not specify responsive variants.
13. Do not install additional dependencies unless absolutely necessary.
14. Do not implement chart libraries yet. We will decide later whether charts should be implemented with SVG/CSS or a library.
15. Do not implement the dashboard screen yet.
16. Do not invent API endpoints.
17. Do not create fake business logic.

For now, create only the folders and the minimum placeholder/index files needed to establish the architecture.

Do not create unnecessary placeholder components.

After making the changes:
- Show me the resulting project tree.
- Explain briefly why each top-level directory exists.
- Confirm which files were created or modified.