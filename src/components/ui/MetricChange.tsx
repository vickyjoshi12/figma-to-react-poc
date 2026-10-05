import type { TrendData } from '../../types/dashboard'

interface MetricChangeProps {
  trend: TrendData
}

function MetricChange({ trend }: MetricChangeProps) {
  const arrow = trend.direction === 'up' ? '↑' : '↓'

  return (
    <p className={`metric-change metric-change--${trend.direction}`}>
      <span aria-hidden="true" className="metric-change__arrow">
        {arrow}
      </span>
      <span>
        {trend.direction === 'up' ? '+' : ''}
        {trend.percentage}%
      </span>
      <span className="metric-change__comparison">{trend.comparisonLabel}</span>
    </p>
  )
}

export default MetricChange
