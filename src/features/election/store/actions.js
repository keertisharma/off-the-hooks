const ELECTION_SLICE = 'election-slice'

export const CREATE_ELECTION = `${ELECTION_SLICE}/create-election`
export const SET_VIEW_MODE = `${ELECTION_SLICE}/set-view-mode`


export const createElectionAction = (electionData) => ({
    type: CREATE_ELECTION,
    payload: { electionData }
})

export const setViewModeAction = (viewMode, electionId = null) => ({
    type: SET_VIEW_MODE,
    payload: { viewMode, electionId }
})

