import { dashboardMockData } from '../data/dashboardMockData'
import type { DashboardData } from '../types/dashboard'

export async function getDashboardData(): Promise<DashboardData> {
  return dashboardMockData
}
