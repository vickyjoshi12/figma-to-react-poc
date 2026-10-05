# Dashboard Figma Design Contract

## Figma source

- File key: `G4D4tulIug9IkYjlNuPZHU`
- Primary dashboard frame: `0:61`
- Canvas: 1440 × 960
- Responsive variants: None found
- Font: Poppins

## Major sections

### Sidebar

- Node: `1:51`
- Size: 240 × 960
- Background: `#F1F2F7`
- Contains 8 navigation items
- Active navigation background: 200 × 42
- Navigation icons: 18 × 18
- Chevron: 20 × 20

### Search

- Node: `0:102`
- Size: 625 × 32
- Background: `#F6F6FB`
- Border radius: 5px

### Account controls

- Node: `0:114`
- Size: 218 × 32

### Revenue

- Node: `0:201`
- Size: 678 × 322
- Chart region: 678 × 141
- Visible value: IDR 7.852.000
- Trend: +2.1% vs last week
- Date range: Sales from 1–12 Dec, 2020

### Order Time

- Node: `0:172`
- Size: 362 × 322
- Tooltip: approximately 140 × 109
- Afternoon: 40%
- Evening: 32%
- Morning: 28%
- Tooltip example:
  - Afternoon
  - 1pm–4pm
  - 1.890 orders

### Rating

- Node: `0:339`
- Approximately 313 × 321
- Rating bubbles approximately:
  - 104px
  - 123px
  - 169px
- Hygiene: 85%
- Packaging: 92%
- Food Taste: 85%

### Most Ordered

- Node: `1:52`
- Size: 312 × 310
- Four product rows
- Product thumbnails: 28 × 28

Products:

1. Fresh Salad Bowl
2. Chicken Noodles
3. Smoothie Fruits
4. Hot Chicken Wings

### Order Stats

- Node: `0:298`
- Size: 362 × 322
- Chart grid: approximately 312 × 141
- Value: 2.568
- Trend: down 2.1%
- Date range: 1–6 Dec, 2020

## Reusable patterns

Evidence-backed repeated patterns include:

- Sidebar navigation item
- Section label
- Search
- Account control
- Report button
- Metric change
- Legend item
- Product row
- Icon
- Product thumbnail
- Divider

Do not create a generic Card component unless implementation demonstrates meaningful reuse.

## Typography

Font family:

Poppins

Dashboard title:

- 18px
- Medium
- Line height: 23px
- Letter spacing: 0.5px
- Color: `#1F384C`

Sidebar labels:

- 12px
- Regular
- Line height: 12px
- Color: `#273240`
- Opacity: 0.6

Section labels:

- 11px
- Regular
- Line height: 11px
- Letter spacing: 1px
- Color: `#082431`
- Opacity: 0.5

Search/account labels:

- 12px
- Regular
- Line height: 13px
- Color: `#1F384C`

View Report:

- 12px
- Medium
- Line height: 20px
- Color: `#5A6ACF`

Order metric:

- 20px
- Medium

Legend labels:

- 12px
- Regular
- Color: `#121212`
- Opacity: 0.7

Product names/prices:

- 12px
- Regular
- Color: `#273240`
- Prices opacity: 0.7

## Colors

Known colors include:

- White
- `#F1F2F7`
- `#F6F6FB`
- `#1F384C`
- `#273240`
- `#5A67BA`
- `#32D16D`
- `#737B8B`
- `#149D52`
- `#F2383A`

## Figma variables and styles

No named variables were returned for the dashboard screen.

No named color, typography, spacing, radius or shadow styles were returned.

Therefore:

- Do not invent a large design-token system.
- Reuse shared values only where repeated usage makes this useful.

## Components and libraries

Figma exposes:

- 8 Iconly icon instances
- 1 chevron instance
- Iconly/Bold icons including:
  - Chart
  - Buy
  - Document
  - Chat
  - Setting
  - Wallet
  - Profile
  - Info Square

The exact source package/library for these icons is not confirmed.

Do not invent an npm package dependency without verification.

## Layout strategy

Recommended React layout:

- CSS Grid for the overall page shell
- CSS Grid for major dashboard sections
- Flexbox for:
  - navigation items
  - account controls
  - legends
  - product rows
  - repeated horizontal content
- Normal document flow for text
- Local absolute positioning only where needed for:
  - chart annotations
  - tooltip
  - overlapping rating bubbles
  - other chart-specific visual details

Do not reproduce the Figma's positioned groups as the overall page layout.

## Responsive behavior

No responsive specification was found.

Therefore:

- Do not invent mobile/tablet breakpoints.
- First target visual fidelity at 1440 × 960.

## Data

Visible data should initially be treated as mock/sample data.

Recommended contracts:

```ts
interface TrendData {
  percentage: number;
  comparisonLabel: string;
  direction: "up" | "down";
}

interface ChartPoint {
  label: string;
  value: number;
}

interface RevenueData {
  amount: number;
  currency: string;
  trend: TrendData;
  dateRangeLabel: string;
  currentSeries: ChartPoint[];
  comparisonSeries: ChartPoint[];
}

interface OrderTimeSegment {
  label: string;
  sharePercent: number;
  timeRange?: string;
  orderCount?: number;
}

interface RatingMetric {
  label: string;
  scorePercent: number;
}

interface ProductData {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
}

interface OrdersData {
  count: number;
  trend: TrendData;
  dateRangeLabel: string;
  currentSeries: ChartPoint[];
  comparisonSeries: ChartPoint[];
}

interface NavigationItemData {
  label: string;
}

interface DashboardData {
  navigationItems: NavigationItemData[];
  revenue: RevenueData;
  orderTime: OrderTimeSegment[];
  ratings: RatingMetric[];
  mostOrdered: ProductData[];
  orders: OrdersData;
}