import {useDispatch, useSelector} from "react-redux"
import { selectVoters } from "./store/selectors"
import {fetchVoters} from "./store/thunks";
import {useEffect} from "react";

export const useRegistration = () => {
    const dispatch = useDispatch ();
    const voters = useSelector(selectVoters);

    useEffect(() => {dispatch(fetchVoters())}, [dispatch]);

    console.log({voters});

    return {
        voters
    }
}
