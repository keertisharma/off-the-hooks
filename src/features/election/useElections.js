import { useSelector } from "react-redux"
import { selectElections } from "./store/selectors"

export const useElections = () => {
    const elections = useSelector(selectElections)

    return {
        elections
    }
}

