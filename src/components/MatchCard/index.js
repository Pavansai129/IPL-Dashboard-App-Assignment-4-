// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props

  const updatedList = {
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    result: matchDetails.result,
    matchStatus: matchDetails.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedList

  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>{' '}
    </li>
  )
}

export default MatchCard
