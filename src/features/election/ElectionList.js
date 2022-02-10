import { Election } from "./Election"

export const ElectionList = ({ elections }) => {
    return (
        <div className="election-list">
            ELECTION LIST
            {elections.map(election =>
                <Election key={election.id} election={election}></Election>
            )}
        </div>
    )
}