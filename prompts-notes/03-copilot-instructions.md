# Create Copilot Instructions

We are building an engineering-grade Figma-to-React POC.

Based on the Figma design contract we created, create:

.github/copilot-instructions.md

The instructions should enforce these principles:

1. React + TypeScript
2. Prefer reusable components based on meaningful repetition
3. Do not blindly convert Figma groups into React components
4. Do not reproduce Figma absolute positioning for overall page layout
5. Prefer CSS Grid and Flexbox
6. Keep business/data logic separate from presentation
7. Use static mock data behind a service/API abstraction
8. Use hooks between UI and data services
9. Do not invent API behaviour from Figma
10. Do not invent responsive behaviour when the Figma source doesn't specify it
11. Preserve existing project conventions
12. Avoid giant components
13. Avoid unnecessary component fragmentation
14. Use semantic HTML and accessibility best practices
15. Use TypeScript types/interfaces for data contracts
16. Treat Figma as the source for visual intent, not business logic
17. Never modify unrelated files
18. Before implementing a Figma design, inspect the Figma MCP context
19. When updating an existing implementation from Figma, make the smallest reasonable code change
20. Visual fidelity should be validated against the Figma reference

Do not implement the React application.

Create only .github/copilot-instructions.md.