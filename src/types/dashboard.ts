export interface TrendData {
  percentage: number
  comparisonLabel: string
  direction: 'up' | 'down'
}

export interface ChartPoint {
  label: string
  value: number
}

export interface RevenueData {
  amount: number
  currency: string
  trend: TrendData
  dateRangeLabel: string
  currentSeriesLabel: string
  comparisonSeriesLabel: string
  currentSeries: ChartPoint[]
  comparisonSeries: ChartPoint[]
}

export interface OrderTimeSegment {
  label: string
  sharePercent: number
  timeRange?: string
  orderCount?: number
}

export interface RatingMetric {
  label: string
  scorePercent: number
}

export interface ProductData {
  id: string
  name: string
  price: number
  currency: string
  imageUrl?: string
}

export interface OrdersData {
  count: number
  trend: TrendData
  dateRangeLabel: string
  currentSeriesLabel: string
  comparisonSeriesLabel: string
  currentSeries: ChartPoint[]
  comparisonSeries: ChartPoint[]
}

export interface NavigationItemData {
  label: string
}

export interface DashboardData {
  navigationItems: NavigationItemData[]
  revenue: RevenueData
  orderTime: OrderTimeSegment[]
  ratings: RatingMetric[]
  mostOrdered: ProductData[]
  orders: OrdersData
}
