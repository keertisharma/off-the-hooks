import { VoterList } from "./VoterList";
import { AddVoterForm } from "./AddVoterForm";
import { EditVoterForm } from "./EditVoterForm";

import "./RegistrationTool.css"

export const sample_voter = {
    id: 1,
    first_name: "Joe",
    last_name: "G.I.",
    address: "2121 Still Ave",
    city: "Sad Miego",
    birth_date: "1/1/2000",
    email: "nobody@nuttin.com",
    phone: "555-333-1212",
}

const sample_voters = [
    sample_voter,
    {
        ...sample_voter,
        id:2,
    }
]

export const RegistrationTool = () => {
    return (
        <div>
            <div>
                RegistrationTool
            </div>
            <VoterList voters={sample_voters} />
            <AddVoterForm submitText="Submit" onSubmit={() => { }}></AddVoterForm>
            <EditVoterForm voter={sample_voter} submitText="Submit" onSubmit={() => { }}></EditVoterForm>
        </div>

    );
}