import { EditVoterForm } from "./EditVoterForm"
import { Voter } from "./Voter"

export const VoterList = ({
    voters,
    setEditMode,
    inEditMode,
    onCancel,
    selectedVoterId,
}) => {
    console.log({ voters })

    return (
        <div>
            VOTER LIST
            {voters.map(voter =>
                inEditMode && selectedVoterId === voter.id ?
                    <EditVoterForm
                        key={voter.id}
                        voter={voter}
                        onCancel={onCancel}
                    /> :
                    <Voter
                        key={voter.id}
                        voter={voter}
                        setEditMode={setEditMode}
                    ></Voter>
            )}
        </div>
    )
}