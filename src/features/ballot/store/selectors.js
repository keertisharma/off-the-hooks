export const selectBallotsByElection = (electionId) => (state) => {
    ;

    return state.ballotTool.ballots.filter ((ballot) => {
        ;

        return ballot.electionId === electionId}
    );
}

export const selectBallots = (state) => state.ballotTool.ballots

export const selectMode = (state) => state.ballotTool.mode;

export const selectSelectedElectionId = (state) => state.ballotTool.selectedElectionId;

export const selectSelectedVoterId = (state) => state.ballotTool.selectedVoterId;

export const selectError = (state) => state.ballotTool.error