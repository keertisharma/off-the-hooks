import { useState } from "react"
import { EditVoterForm } from "./EditVoterForm"
import { Voter } from "./Voter"

export const VoterList = ({
    voters,
    setEditMode,
    inEditMode,
    onCancel,
    selectedVoterId,
    onDelete,
    onDeleteMany,
    updateVoter,
}) => {
    console.log({ onDeleteMany })

    const [selectedVoterIds, setSelectedVoterIds] = useState([])

    const onSelect = (iClicked) => {
        const voterId = voters[iClicked].id
        const newSelections = selectedVoterIds.includes(voterId) ?
            selectedVoterIds.filter(id => id !== voterId) :
            [...selectedVoterIds, voterId]

        setSelectedVoterIds(newSelections)
    }

    const deleteSelected = () => {
        onDeleteMany(selectedVoterIds)
    }

    return (
        <div>
            VOTER LIST
            <>
                <button
                    type="button"
                    disabled={selectedVoterIds.length === 0}
                    onClick={deleteSelected}
                >Delete Selected</button>
                {voters.map((voter, i) => {
                    return (
                        inEditMode && selectedVoterId === voter.id ?
                            <EditVoterForm
                                key={voter.id}
                                voter={voter}
                                onCancel={onCancel}
                                onSubmit={updateVoter}
                            /> :
                            <div
                                key={voter.id}
                            >
                                {!inEditMode && <input
                                    type="checkbox"
                                    value={selectedVoterIds.includes(voter.id)}
                                    onChange={() =>
                                        onSelect(i)
                                    }
                                />
                                }
                                <Voter
                                    voter={voter}
                                    setEditMode={setEditMode}
                                    onDelete={onDelete}
                                ></Voter>
                            </div>
                    )
                }
                )}
            </>

        </div>
    )
}