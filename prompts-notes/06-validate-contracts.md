Review the four dashboard data-layer files you just created:

- src/types/dashboard.ts
- src/data/dashboardMockData.ts
- src/services/dashboardService.ts
- src/hooks/useDashboardData.ts

Do not modify anything.

Perform an engineering review against:

1. .github/copilot-instructions.md
2. prompts-notes/design-contract.md

Check specifically for:

- TypeScript correctness
- Whether the data contracts match the design contract
- Whether mock data is clearly separated from types
- Whether any Figma values were incorrectly treated as confirmed data
- Whether any chart data was invented beyond what is necessary for a mock
- Whether the service abstraction is genuinely useful and not over-engineered
- Whether the hook contains unnecessary business logic
- Whether UI components could accidentally bypass the service layer
- Whether there are unnecessary type assertions
- Whether there are unnecessary abstractions
- Whether any dependencies or assumptions were introduced
- Whether the implementation follows the intended dependency direction:

UI
↓
useDashboardData
↓
dashboardService
↓
dashboardMockData

Do not make changes.

Return:
1. Issues found
2. Recommended changes, if any
3. Overall rating: Ready / Minor Changes / Needs Rework

Do not modify any files.