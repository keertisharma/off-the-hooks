import { AddElectionForm } from "./AddElectionForm"
import { ElectionList } from './ElectionList'

import "./ElectionTool.css"
import { useElections } from './useElections';

export const ElectionTool = () => {

    const { elections } = useElections();

    return (
        <div>
            ElectionTool
            <ElectionList elections={elections}></ElectionList>
            <AddElectionForm submitText="Submit" onSubmit={() => { }} />
        </div>
    );
}
