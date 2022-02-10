import { Voter } from "./Voter"

export const VoterList = ({ voters }) => {
    console.log({voters})
    
    return (
        <div>
            VOTER LIST
            {voters.map(voter =>
                 <Voter key={voter.id} voter={voter}></Voter>
                 )}
        </div>
    )
}