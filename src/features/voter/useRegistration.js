import { useSelector } from "react-redux"
import { selectVoters } from "./store/selectors"

export const useRegistration = () => {
    const voters = useSelector(selectVoters)

    console.log({voters})

    return {
        voters
    }
}
