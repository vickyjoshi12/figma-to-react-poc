import type { OrdersData } from '../../../types/dashboard'
import LegendItem from '../../../components/ui/LegendItem'
import MetricChange from '../../../components/ui/MetricChange'
import ReportButton from '../../../components/ui/ReportButton'
import OrdersLineChart from './OrdersLineChart'

interface OrdersPanelProps {
  orders: OrdersData
}

function OrdersPanel({ orders }: OrdersPanelProps) {
  return (
    <section aria-labelledby="orders-title" className="dashboard-panel orders-panel">
      <div className="panel-heading">
        <h2 id="orders-title">Order</h2>
        <ReportButton />
      </div>
      <p className="orders-count">{orders.count.toLocaleString('id-ID')}</p>
      <MetricChange trend={orders.trend} />
      <p className="panel-date-range">Sales from {orders.dateRangeLabel}</p>
      <OrdersLineChart orders={orders} />
      <div className="panel-legend">
        <LegendItem color="#5A67BA" label={orders.currentSeriesLabel} />
        <LegendItem color="#D1D4DA" label={orders.comparisonSeriesLabel} />
      </div>
    </section>
  )
}

export default OrdersPanel
