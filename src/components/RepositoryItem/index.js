// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoriesDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoriesDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} alt={name} className="repository-image" />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stats-icon"
        />
        <p className="stats-text">{starsCount}</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-text">{forksCount}</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
      </div>
      <p className="stats-text">{issuesCount}</p>
    </li>
  )
}

export default RepositoryItem
