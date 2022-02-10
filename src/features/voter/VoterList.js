import { Voter } from "./Voter"

export const VoterList = ({ voters }) => {
    return (
        <div>
            VOTER LIST
            {voters.map(voter =>
                 <Voter key={voter.id} voter={voter}></Voter>
                 )}
        </div>
    )
}