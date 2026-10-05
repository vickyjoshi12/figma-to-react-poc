import type { RatingMetric } from '../../../types/dashboard'

interface RatingPanelProps {
  ratings: RatingMetric[]
}

function RatingPanel({ ratings }: RatingPanelProps) {
  return (
    <section aria-labelledby="rating-title" className="dashboard-panel rating-panel">
      <h2 id="rating-title">Your Rating</h2>
      <p className="panel-description">Lorem ipsum dolor sit amet, consectetur</p>
      <div className="rating-visualization">
        <ul aria-label="Rating metrics" className="rating-bubbles">
          {ratings.map((rating, index) => (
            <li
              className={`rating-bubble rating-bubble--${index + 1}`}
              key={rating.label}
            >
              <strong>{rating.scorePercent}%</strong>
              <span>{rating.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RatingPanel
