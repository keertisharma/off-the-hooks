export const selectBallotsByElection = (electionId) => (state) => {
    ;

    return state.ballotTool.ballots.filter ((ballot) => {
        ;

        return ballot.electionId === electionId}
    );
}

// export const selectElectionViewMode = (state) => state.electionTool.mode;
export const selectSelectedElectionId = (state) => state.ballotTool.selectedElectionId;
