import { AddElectionForm } from "./AddElectionForm"
import { ElectionTable } from './ElectionTable'

import "./ElectionTool.css"
import { useElections } from './useElections';

export const ElectionTool = () => {

    const { elections, createElection } = useElections();
    console.log(elections);
    return (
        <div className="election-tool">
            ElectionTool
            <AddElectionForm submitText="Submit" onSubmit={createElection} />
            <ElectionTable elections={elections}></ElectionTable>
        </div>
    );
}
