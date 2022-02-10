import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react";
import { bindActionCreators } from 'redux';
import { selectMode, selectSortOrder, selectVoters, selectSelectedVoterId } from "./store/selectors"
import { appendVoter, fetchVoters } from "./store/thunks";

import {
    createRegisterVoterAction,
    createSetVotersAction,
    createUpdateVoterAction,
    createDeleteVoterAction,
    createDeleteMultipleVotersAction,
    createSetSortOrderAction,
    createSetModeAction,
    createResetModeAction,
    createSetSelectedVoterIdAction,
} from './store/actions'
import { nanoid } from "nanoid";

export const useRegistration = () => {
    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
        // these will be implied by API behaviors
        // createRegisterVoterAction,
        // createSetVotersAction,
        // createUpdateVoterAction,
        // createDeleteVoterAction,
        // createDeleteMultipleVotersAction,
        createSetSortOrderAction,
        createSetModeAction,
        createResetModeAction,
        createSetSelectedVoterIdAction,
    }, dispatch), [dispatch])

    const voters = useSelector(selectVoters);
    const sortOrder = useSelector(selectSortOrder)
    const mode = useSelector(selectMode);
    const selectedVoterId = useSelector(selectSelectedVoterId);

    useEffect(() => { dispatch(fetchVoters()) }, [dispatch]);

    const registerVoter = (voterData) => {
        const voter = ({
            ...voterData,
            id: nanoid()
        })
        console.log({voterData, voter})
        dispatch(appendVoter(voter))
    }

    const setAddMode = () => {
        dispatch(createSetModeAction('add'));
    }
    const setEditMode = (id) => {
        dispatch(createSetModeAction('edit'))
        dispatch(createSetSelectedVoterIdAction(id))
    }

    console.log({ mode });

    return {
        ...actions,
        voters,
        sortOrder,
        inEditMode: mode === 'edit',
        inAddMode: mode === 'add',
        setAddMode,
        setEditMode,
        selectedVoterId,
        registerVoter,
    }
}
