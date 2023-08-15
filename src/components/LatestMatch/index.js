// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedList = {
    competingTeam: latestMatchDetails.competing_team,
    date: latestMatchDetails.date,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    venue: latestMatchDetails.venue,
    result: latestMatchDetails.result,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    umpires: latestMatchDetails.umpires,
  }
  const {
    competingTeam,
    date,
    competingTeamLogo,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = updatedList

  return (
    <div className="latest-match-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
