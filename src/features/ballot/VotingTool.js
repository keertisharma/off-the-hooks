import "./VotingTool.css"
import { useBallot } from "./useBallot";
import { ElectionTable } from "./ElectionTable";
import { VoterLogin } from './VoterLogin';
import { BallotForm } from './BallotForm';
import { Success } from "./Success";
import { Error } from "./Error";

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
        inSuccessMode,
        inVotingMode,
        onLoginSubmit,
        castVote,
        error,
        resetMode,
    } = useBallot();



    return (
        <div>
            VotingTool
            {inVotingMode && selectedElection && selectedVoter &&
                <BallotForm
                    voter={selectedVoter}
                    election={selectedElection}
                    castVote={castVote}
                />
            }
            {(inDefaultMode || inLoginMode) &&
                <ElectionTable
                    elections={elections}
                    setSelectedElectionId={setSelectedElectionId}
                    selectedElectionId={selectedElectionId}
                />
            }
            {inLoginMode &&
                <VoterLogin
                    onSubmit={onLoginSubmit}
                    onCancel={resetMode} />
            }
            {inSuccessMode &&
                <Success resetMode={resetMode} />
            }
            {inErrorMode &&
                <Error error={error} resetMode={resetMode} />
            }
        </div>
    );
}
