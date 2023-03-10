import './Card.css'
const Card = ({title, children}) => (
  <div className="subject-card">
    <h3 className="subject-card__title">{title}</h3>
    <hr />
    {children}
    <p></p>
  </div>
)

export default Card