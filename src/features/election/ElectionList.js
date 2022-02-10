import { Election } from "./Election"

export const ElectionList = ({ elections }) => {
    return (
        <div>
            ELECTION LIST
            {elections.map(election =>
                <Election key={election.id} election={election}></Election>
            )}
        </div>
    )
}