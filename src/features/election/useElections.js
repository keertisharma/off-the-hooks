import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import {
    selectElections,
    selectElectionViewMode,
    selectSelectedElectionId,
} from "./store/selectors"
import { nanoid } from "nanoid"
import { createSetModeAction } from "../voter/store/actions"
import { fetchElections } from "./store/thunks"


export const useElections = () => {
    const dispatch = useDispatch()

    const elections = useSelector(selectElections)
    const mode = useSelector(selectElectionViewMode)
    const selectedElectionId = useSelector(selectSelectedElectionId)

    useEffect(() => {
        dispatch(fetchElections())
    }, [dispatch])

    const createElection = (electionData) => {
        const election = ({
            ...electionData,
            id: nanoid()
        })
    }

    const setAddMode = () => {
        dispatch(createSetModeAction('add'))
    }

    const resetMode = () => {
        dispatch(createSetModeAction(null))
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

