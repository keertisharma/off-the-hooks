export const selectElections = (state) => state.electionTool.elections;
export const selectElectionViewMode = (state) => state.electionTool.mode;
export const selectSelectedElectionId = (state) => state.electionTool.selectedElectionId;
export const selectElectionById = (id) => state => {
    return state.electionTool.elections.find(election => election.id === id);
}
