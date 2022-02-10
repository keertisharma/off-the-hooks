import { VoterList } from "./VoterList";
import { AddVoterForm } from "./AddVoterForm";
import { EditVoterForm } from "./EditVoterForm";

import "./RegistrationTool.css"
import { useRegistration } from "./useRegistration";

export const RegistrationTool = () => {
    const {voters} = useRegistration()

    return (
        <div>
            <div>
                RegistrationTool
            </div>
            <VoterList voters={voters} />
            {/*<AddVoterForm submitText="Submit" onSubmit={() => { }}></AddVoterForm>*/}
            {/*<EditVoterForm voter={voters[0]} submitText="Submit" onSubmit={() => { }}></EditVoterForm>*/}
        </div>

    );
}