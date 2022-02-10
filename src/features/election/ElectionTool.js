import { AddElectionForm } from "./AddElectionForm"
import { ElectionList } from './ElectionList'

import "./ElectionTool.css"
import { useElections } from './useElections';

export const ElectionTool = () => {

    const { elections } = useElections();

    return (
        <div className="election-tool">
            ElectionTool
            <ElectionList elections={elections}></ElectionList>
            <AddElectionForm submitText="Submit" onSubmit={() => { }} />
        </div>
    );
}
