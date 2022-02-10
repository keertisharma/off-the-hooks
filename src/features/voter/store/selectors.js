import {voterReducer} from "./reducers";

export const selectVoters = (state) => {
    const sortedVoters = [...state.voterTool.voters];
    const sortOrder = state.voterTool.sortOrder;

    if (sortOrder.column) {
        sortedVoters.sort( (voter1, voter2) => {
            const val1 = voter1[sortOrder.column];
            const val2 = voter2[sortOrder.column];

            if (voter1[sortOrder.column] < voter2[sortOrder.column]) {
                return sortOrder.direction;
            }
            if (voter1[sortOrder.column] > voter2[sortOrder.column]) {
                return -sortOrder.direction;
            }
            return 0;
        });
    }
    return sortedVoters;
}
export const selectSortOrder = (state) => {
    return state.voterTool.sortOrder;
}
export const selectMode = (state) => state.voterTool.mode
export const selectSelectedVoterId = (state) => state.voterTool.selectedVoterId
