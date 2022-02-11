const BALLOT_SLICE = 'ballot-slice'

export const CREATE_BALLOT = `${BALLOT_SLICE}/create-ballot`
export const SET_BALLOTS = `${BALLOT_SLICE}/set-ballots`
export const SET_BALLOT_VIEW_MODE = `${BALLOT_SLICE}/set-ballot-view-mode`
export const SET_SELECTED_BALLOT_ID = `${BALLOT_SLICE}/set-selected-ballot-id`

export const createBallotAction = (voterId, electionId, ballotData) => ({
    type: CREATE_BALLOT,
    payload: { voterId, electionId, ballotData }
})

export const createSetBallotsAction = (ballotsData) => ({
    type: SET_BALLOTS,
    payload: { ballotsData },
})

/*export const createSetBallotViewModeAction = (viewMode, electionId = null) => ({
    type: SET_BALLOT_VIEW_MODE,
    payload: { viewMode, electionId }
})

export const createSetSelectedElectionIdAction = (electionId) => ({
    type: SET_SELECTED_ELECTION_ID,
    payload: { electionId }
})

export const createResetModeAction = () => ({
    type: SET_VIEW_MODE,
    payload: { mode:null }
})*/