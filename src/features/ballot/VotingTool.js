import "./VotingTool.css"
import { useBallot } from "./useBallot";
import { ElectionTable } from "./ElectionTable";
import { VoterLogin } from './VoterLogin';
import { BallotForm } from './BallotForm';

export const VotingTool = () => {
    const {
        elections,
        selectedElectionId,
        setSelectedElectionId,
        selectedElection,
        selectedVoter,
        inDefaultMode,
        inLoginMode,
        inErrorMode,
        inVotingMode,
        onLoginSubmit,
        onCancel
    } = useBallot();

    

    return (
        <div>
            VotingTool
            { inVotingMode &&
               <BallotForm voter={selectedVoter} election={selectedElection} />
            }

            { (inDefaultMode || inLoginMode) &&
            <ElectionTable elections={elections}
                setSelectedElectionId={setSelectedElectionId}
                selectedElectionId={selectedElectionId} />
            }
            {
                inLoginMode && <VoterLogin onSubmit={onLoginSubmit} onCancel={onCancel} />
            }    

        </div>
    );
}