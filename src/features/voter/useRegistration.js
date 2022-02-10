import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectMode, selectSortOrder, selectVoters, selectSelectedVoterId } from "./store/selectors"
import { appendVoter, deleteVoter, fetchVoters, replaceVoter, deleteMultipleVoter } from "./store/thunks";

import {
    createSetModeAction,
    createResetModeAction,
    createSetSelectedVoterIdAction,
    createSetSortOrderAction,
} from './store/actions'
import { nanoid } from "nanoid";

export const useRegistration = () => {
    const dispatch = useDispatch();

    const voters = useSelector(selectVoters);
    const sortOrder = useSelector(selectSortOrder)
    console.log("userRegistration",sortOrder);

    const mode = useSelector(selectMode);
    const selectedVoterId = useSelector(selectSelectedVoterId);

    useEffect(() => {
        dispatch(fetchVoters())
    }, [dispatch]);

    const registerVoter = (voterData) => {
        const voter = ({
            ...voterData,
            id: nanoid()
        })

        dispatch(appendVoter(voter))
        dispatch(createResetModeAction())
    }

    const setAddMode = () => {
        dispatch(createSetModeAction('add'));
    }
    const setEditMode = (id) => {
        dispatch(createSetModeAction('edit'))
        dispatch(createSetSelectedVoterIdAction(id))
    }
    const resetMode = () => {
        dispatch(createResetModeAction())
    }
    const onDelete = (id) => {
        dispatch(deleteVoter(id))
        dispatch(createResetModeAction())
    }
    const updateVoter = (voterData, id) => {
        const voter = ({
            ...voterData,
            id: id
        })
        dispatch(replaceVoter(voterData))
        dispatch(createResetModeAction())
    }

    const onDeleteMultiple = (ids) => {
        dispatch(deleteMultipleVoter(ids))
        dispatch(createResetModeAction())
    }

    const setSortOrder = (column) => {
        let direction = 1;
        if (sortOrder.column === column) {
            direction = -sortOrder.direction;
        }
        dispatch(createSetSortOrderAction({column, direction}));
    }

    return {
        voters,
        sortOrder,
        setSortOrder,
        inEditMode: mode === 'edit',
        inAddMode: mode === 'add',
        setAddMode,
        setEditMode,
        resetMode, 
        selectedVoterId,
        registerVoter,
        onDelete,
        onDeleteMultiple,
        updateVoter
    }
}
