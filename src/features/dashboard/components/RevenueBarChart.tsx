import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import type { RevenueData } from '../../../types/dashboard'
import './RevenueBarChart.css'

interface RevenueBarChartProps {
  revenue: RevenueData
}

function RevenueBarChart({ revenue }: RevenueBarChartProps) {
  const currentValues = new Map(
    revenue.currentSeries.map(({ label, value }) => [label, value]),
  )
  const comparisonValues = new Map(
    revenue.comparisonSeries.map(({ label, value }) => [label, value]),
  )
  const labels = [
    ...new Set([
      ...revenue.currentSeries.map(({ label }) => label),
      ...revenue.comparisonSeries.map(({ label }) => label),
    ]),
  ]
  const chartData = labels.map((label) => ({
    label,
    current: currentValues.get(label),
    comparison: comparisonValues.get(label),
  }))

  return (
    <div
      aria-label={`Illustrative revenue chart comparing ${revenue.currentSeriesLabel} with ${revenue.comparisonSeriesLabel}.`}
      className="revenue-bar-chart"
      role="img"
    >
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          barGap={3}
          data={chartData}
          margin={{ top: 8, right: 2, bottom: 0, left: 2 }}
        >
          <CartesianGrid
            horizontal
            stroke="#EEEEEE"
            strokeDasharray="3 5"
            vertical={false}
          />
          <XAxis
            axisLine={false}
            dataKey="label"
            interval={0}
            tick={{ fill: '#B7B7B7', fontSize: 10 }}
            tickMargin={6}
            tickLine={false}
          />
          <YAxis hide />
          <Bar
            dataKey="current"
            fill="#5A67BA"
            maxBarSize={9}
            name={revenue.currentSeriesLabel}
            radius={0}
          />
          <Bar
            dataKey="comparison"
            fill="#E5E5E5"
            maxBarSize={9}
            name={revenue.comparisonSeriesLabel}
            radius={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueBarChart
