export const selectBallotsByElection = (electionId) => (state) => {
    ;

    return state.ballotTool.ballots.filter ((ballot) => {
        ;

        return ballot.electionId === electionId}
    );
}

export const selectMode = (state) => state.ballotTool.mode;

export const selectSelectedElectionId = (state) => state.ballotTool.selectedElectionId;

export const selectSelectedVoterId = (state) => state.ballotTool.selectedVoterId;
