const VOTER_SLICE = 'voter-slice'

export const REGISTER_VOTER = `${VOTER_SLICE}/register-voter`
export const UPDATE_VOTER = `${VOTER_SLICE}/update-voter`
export const DELETE_VOTER = `${VOTER_SLICE}/delete-voter`
export const DELETE_MULTIPLE_VOTERS = `${VOTER_SLICE}/delete-multiple-voters`
export const SET_SORT_ORDER = `${VOTER_SLICE}/set-sort-order`

// voterData: {first_name, last_name, ....}
export const createRegisterVoterAction = (voterData) => ({
    type: REGISTER_VOTER,
    payload: { voterData }
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
