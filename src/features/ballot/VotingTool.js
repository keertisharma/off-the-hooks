import { BallotForm } from "./BallotForm";

import "./VotingTool.css"
import { useBallot } from "./useBallot";
import { ElectionTable } from "./ElectionTable";

export const VotingTool = () => {
    const { elections, selectedElectionId, setSelectedElectionId } = useBallot();

    console.log({selectedElectionId})
    return (
        <div>
            VotingTool
            {/*<BallotForm voter={sample_voter} election={sample_election} />*/}
            <ElectionTable elections={elections}
             setSelectedElectionId={setSelectedElectionId}  
             selectedElectionId={selectedElectionId} />
        </div>
    );
}