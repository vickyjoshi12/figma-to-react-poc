import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import type { OrdersData } from '../../../types/dashboard'
import './OrdersLineChart.css'

interface OrdersLineChartProps {
  orders: OrdersData
}

function OrdersLineChart({ orders }: OrdersLineChartProps) {
  const currentValues = new Map(
    orders.currentSeries.map(({ label, value }) => [label, value]),
  )
  const comparisonValues = new Map(
    orders.comparisonSeries.map(({ label, value }) => [label, value]),
  )
  const labels = [
    ...new Set([
      ...orders.currentSeries.map(({ label }) => label),
      ...orders.comparisonSeries.map(({ label }) => label),
    ]),
  ]
  const chartData = labels.map((label) => ({
    label,
    current: currentValues.get(label),
    comparison: comparisonValues.get(label),
  }))

  return (
    <div
      aria-label={`Illustrative orders chart comparing ${orders.currentSeriesLabel} with ${orders.comparisonSeriesLabel}.`}
      className="orders-line-chart"
      role="img"
    >
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={chartData}
          margin={{ top: 8, right: 2, bottom: 0, left: 2 }}
        >
          <CartesianGrid
            horizontal
            stroke="#E5E7EB"
            strokeDasharray="3 6"
            vertical={false}
          />
          <XAxis
            axisLine
            dataKey="label"
            padding={{ left: 14, right: 14 }}
            tick={{ fill: '#B5BBC5', fontSize: 12 }}
            tickMargin={8}
            tickLine={false}
            stroke="#E1E5E8"
          />
          <YAxis
            axisLine={false}
            domain={[0, 100]}
            tick={false}
            tickLine={false}
            ticks={[25, 50, 75]}
            width={0}
          />
          <Line
            dataKey="current"
            name={orders.currentSeriesLabel}
            stroke="#5A67BA"
            strokeWidth={2}
            type="linear"
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            dataKey="comparison"
            name={orders.comparisonSeriesLabel}
            stroke="#E1E3E8"
            strokeWidth={2}
            type="linear"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OrdersLineChart
