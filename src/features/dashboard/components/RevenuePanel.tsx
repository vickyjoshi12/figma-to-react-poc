import type { RevenueData } from '../../../types/dashboard'
import LegendItem from '../../../components/ui/LegendItem'
import MetricChange from '../../../components/ui/MetricChange'
import ReportButton from '../../../components/ui/ReportButton'
import RevenueBarChart from './RevenueBarChart'

interface RevenuePanelProps {
  revenue: RevenueData
}

function RevenuePanel({ revenue }: RevenuePanelProps) {
  return (
    <section aria-labelledby="revenue-title" className="dashboard-panel revenue-panel">
      <div className="panel-heading">
        <h2 id="revenue-title">Revenue</h2>
        <ReportButton />
      </div>
      <p className="revenue-amount">
        {revenue.currency} {revenue.amount.toLocaleString('id-ID')}
      </p>
      <MetricChange trend={revenue.trend} />
      <p className="panel-date-range">{revenue.dateRangeLabel}</p>
      <RevenueBarChart revenue={revenue} />
      <div className="panel-legend">
        <LegendItem color="#5A67BA" label={revenue.currentSeriesLabel} />
        <LegendItem color="#D9D9D9" label={revenue.comparisonSeriesLabel} />
      </div>
    </section>
  )
}

export default RevenuePanel
