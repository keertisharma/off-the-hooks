const VOTER_SLICE = 'voter-slice'

export const REGISTER_VOTER = `${VOTER_SLICE}/register-voter`
export const SET_VOTERS = `${VOTER_SLICE}/set-voters`

export const UPDATE_VOTER = `${VOTER_SLICE}/update-voter`
export const DELETE_VOTER = `${VOTER_SLICE}/delete-voter`
export const DELETE_MULTIPLE_VOTERS = `${VOTER_SLICE}/delete-multiple-voters`

export const SET_SORT_ORDER = `${VOTER_SLICE}/set-sort-order`
export const SET_MODE = `${VOTER_SLICE}/set-mode`
export const RESET_MODE = `${VOTER_SLICE}/reset-mode`
export const SET_SELECTED_VOTER_ID=`${VOTER_SLICE}/set-selected-voter-id`

// voterData: {first_name, last_name, ....}
export const createRegisterVoterAction = (voterData) => ({
    type: REGISTER_VOTER,
    payload: { voterData }
})

// votersData: [{first_name, last_name, ....}]
export const createSetVotersAction = (votersData) => ({
    type: SET_VOTERS,
    payload: { votersData }
})

// id: ID, voterData: {first_name, last_name, ....}
export const createUpdateVoterAction = (id, voterData) => ({
    type: UPDATE_VOTER,
    payload: { id, voterData }
})

// id: ID
export const createDeleteVoterAction = (id) => ({
    type: DELETE_VOTER,
    payload: { id }
})

// ids: [id, id, ...]
export const createDeleteMultipleVotersAction = (ids) => ({
    type: DELETE_MULTIPLE_VOTERS,
    payload: { ids }
})

// order: {column, direction}
export const createSetSortOrderAction = (order) => ({
    type: SET_SORT_ORDER,
    payload: { order }
})

// mode: 'add', 'edit'
export const createSetModeAction = (mode) => ({
    type: SET_MODE,
    payload: { mode }
})

export const createResetModeAction = () => ({
    type: SET_MODE,
    payload: { mode:null }
})

// voterId: ID
export const createSetSelectedVoterIdAction = (voterId) => ({
    type: SET_SELECTED_VOTER_ID,
    payload: { voterId }
})
