import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { TooltipContentProps } from 'recharts'
import type { OrderTimeSegment } from '../../../types/dashboard'
import { orderTimeSegmentColors } from './orderTimeChartColors'
import './OrderTimeDonutChart.css'

interface OrderTimeDonutChartProps {
  segments: OrderTimeSegment[]
}

function isOrderTimeSegment(value: unknown): value is OrderTimeSegment {
  return (
    typeof value === 'object' &&
    value !== null &&
    'label' in value &&
    typeof value.label === 'string' &&
    'sharePercent' in value &&
    typeof value.sharePercent === 'number'
  )
}

function OrderTimeTooltip({
  active,
  payload,
}: TooltipContentProps) {
  const segment = payload[0]?.payload

  if (!active || !isOrderTimeSegment(segment)) {
    return null
  }

  return (
    <div className="order-time-tooltip">
      <span className="order-time-tooltip__period">{segment.label}</span>
      {segment.timeRange && (
        <span className="order-time-tooltip__time">{segment.timeRange}</span>
      )}
      {segment.orderCount !== undefined && (
        <strong>{segment.orderCount.toLocaleString('id-ID')} orders</strong>
      )}
    </div>
  )
}

function OrderTimeDonutChart({ segments }: OrderTimeDonutChartProps) {
  const description = segments
    .map(({ label, sharePercent }) => `${label} ${sharePercent}%`)
    .join(', ')

  return (
    <div
      aria-label={`Order time distribution: ${description}.`}
      className="order-time-donut-chart"
      role="img"
    >
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <Pie
            data={segments}
            dataKey="sharePercent"
            innerRadius="56%"
            nameKey="label"
            outerRadius="82%"
            startAngle={90}
            endAngle={-270}
          >
            {segments.map((segment, index) => (
              <Cell
                fill={orderTimeSegmentColors[index] ?? '#737B8B'}
                key={segment.label}
              />
            ))}
          </Pie>
          <Tooltip content={OrderTimeTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OrderTimeDonutChart
