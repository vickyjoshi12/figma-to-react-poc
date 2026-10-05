import type { DashboardData } from '../../../types/dashboard'
import OrderTimePanel from './OrderTimePanel'
import MostOrderedPanel from './MostOrderedPanel'
import OrdersPanel from './OrdersPanel'
import RatingPanel from './RatingPanel'
import RevenuePanel from './RevenuePanel'

interface DashboardContentProps {
  data: DashboardData
}

function DashboardContent({ data }: DashboardContentProps) {
  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-top-grid">
        <RevenuePanel revenue={data.revenue} />
        <OrderTimePanel
          dateRangeLabel={data.orders.dateRangeLabel}
          segments={data.orderTime}
        />
      </div>

      <div className="dashboard-bottom-grid">
        <RatingPanel ratings={data.ratings} />
        <MostOrderedPanel products={data.mostOrdered} />
        <OrdersPanel orders={data.orders} />
      </div>
    </div>
  )
}

export default DashboardContent
