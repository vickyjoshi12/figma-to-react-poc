interface SectionLabelProps {
  children: string
}

function SectionLabel({ children }: SectionLabelProps) {
  return <p className="section-label">{children}</p>
}

export default SectionLabel
