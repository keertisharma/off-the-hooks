const ELECTION_SLICE = 'election-slice'

export const CREATE_ELECTION = `${ELECTION_SLICE}/create-election`
export const SET_ELECTIONS = `${ELECTION_SLICE}/set-elections`
export const SET_VIEW_MODE = `${ELECTION_SLICE}/set-view-mode`
export const SET_SELECTED_ELECTION_ID = `${ELECTION_SLICE}/set-selected-election-id`

export const createElectionAction = (electionData) => ({
    type: CREATE_ELECTION,
    payload: { electionData }
})

export const createSetElectionsAction = (electionsData) => ({
    type: SET_ELECTIONS,
    payload: { electionsData },
})

export const createSetViewModeAction = (viewMode, electionId = null) => ({
    type: SET_VIEW_MODE,
    payload: { viewMode, electionId }
})

export const createSetSelectedElectionIdAction = (electionId) => ({
    type: SET_SELECTED_ELECTION_ID,
    payload: { electionId }
})

export const createResetModeAction = () => ({
    type: SET_VIEW_MODE,
    payload: { mode:null }
})