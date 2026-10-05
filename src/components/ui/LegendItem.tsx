interface LegendItemProps {
  label: string
  color: string
  detail?: string
}

function LegendItem({ label, color, detail }: LegendItemProps) {
  return (
    <span className="legend-item">
      <span aria-hidden="true" className="legend-item__dot" style={{ backgroundColor: color }} />
      <span className="legend-item__label">{label}</span>
      {detail && <span className="legend-item__detail">{detail}</span>}
    </span>
  )
}

export default LegendItem
