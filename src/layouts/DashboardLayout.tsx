import type { ReactNode } from 'react'
import type { NavigationItemData } from '../types/dashboard'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar'

interface DashboardLayoutProps {
  navigationItems: NavigationItemData[]
  children: ReactNode
}

function DashboardLayout({ navigationItems, children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar navigationItems={navigationItems} />
      <div className="dashboard-main">
        <DashboardTopBar />
        <main className="dashboard-main-content">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
