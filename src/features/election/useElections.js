import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import {
    selectElections,
    selectElectionViewMode,
    selectSelectedElectionId,
} from "./store/selectors"
import { nanoid } from "nanoid"
import { createSetViewModeAction, createResetModeAction } from "../election/store/actions"
import { appendElections, fetchElections } from "./store/thunks"


export const useElections = () => {
    const dispatch = useDispatch()

    const elections = useSelector(selectElections)
    const mode = useSelector(selectElectionViewMode)
    const selectedElectionId = useSelector(selectSelectedElectionId)

    useEffect(() => {
        dispatch(fetchElections())
    }, [dispatch])

    const createElection = (electionData) => {
        const elections = ({
            ...electionData,
            id: nanoid()
        })
        dispatch(appendElections(elections))
        dispatch(createResetModeAction())
    }

    const setAddMode = () => {
        dispatch(createSetViewModeAction('add'))
    }

    const resetMode = () => {
        dispatch(createSetViewModeAction(null))
    }

    return {
        elections,
        inAddMode: mode==='add',
        setAddMode,
        resetMode,
        selectedElectionId,
        createElection,
    }
}

