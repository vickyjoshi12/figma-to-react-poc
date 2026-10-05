import type { OrderTimeSegment } from '../../../types/dashboard'
import LegendItem from '../../../components/ui/LegendItem'
import ReportButton from '../../../components/ui/ReportButton'
import OrderTimeDonutChart from './OrderTimeDonutChart'
import { orderTimeSegmentColors } from './orderTimeChartColors'

interface OrderTimePanelProps {
  segments: OrderTimeSegment[]
  dateRangeLabel: string
}

function OrderTimePanel({ segments, dateRangeLabel }: OrderTimePanelProps) {
  return (
    <section aria-labelledby="order-time-title" className="dashboard-panel order-time-panel">
      <div className="panel-heading">
        <h2 id="order-time-title">Order Time</h2>
        <ReportButton />
      </div>
      <p className="order-time-date">From {dateRangeLabel}</p>
      <div className="order-time-visualization">
        <OrderTimeDonutChart segments={segments} />
      </div>
      <div className="order-time-legend">
        {segments.map((segment, index) => (
          <LegendItem
            color={orderTimeSegmentColors[index] ?? '#737B8B'}
            detail={`${segment.sharePercent}%`}
            key={segment.label}
            label={segment.label}
          />
        ))}
      </div>
    </section>
  )
}

export default OrderTimePanel
