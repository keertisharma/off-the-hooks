export const selectBallotsByElection = (electionId) => (state) => {
    console.log("BallotSelector", state);

    return state.ballotTool.ballots.filter ((ballot) => {
        console.log("BallotSelector", ballot, electionId);

        return ballot.electionId === electionId}
    );
}

// export const selectElectionViewMode = (state) => state.electionTool.mode;
export const selectSelectedElectionId = (state) => state.electionTool.selectedElectionId;
