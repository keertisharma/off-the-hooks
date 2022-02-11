//import PropTypes from 'prop-types';

//import { votersPropType } from './voterToolPropTypes';
import { SortColHeader } from './SortColHeader';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from "./VoterEditRow";
import { useState } from 'react';


const cols = [
    { field: 'id', label: 'Id' },
    { field: 'first_name', label: 'First Name' },
    { field: 'last_name', label: 'Last Name' },
    { field: 'address', label: 'Address' },
    { field: 'city', label: 'City' },
    { field: 'birth_date', label: 'Birthdate' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Phone' },
];

export const VoterTable = ({
    voters, editVoterId, votersSort,
    onSortVoters: sortVoters,
    onEditVoter: editVoter,
    onDeleteVoter: deleteVoter,
    onSaveVoter: saveVoter,
    onCancelVoter: cancelVoter,
    onCancel,
    updateVoter,
    setEditMode,
    onDelete,
    inEditMode,
    selectedVoterId,
    onDeleteMultiple,
}) => {

    const [selectedVoterIds, setSelectedVoterIds] = useState([])

    const onSelect = (iClicked) => {
        const voterId = voters[iClicked].id
        const newSelections = selectedVoterIds.includes(voterId) ?
            selectedVoterIds.filter(id => id !== voterId) :
            [...selectedVoterIds, voterId]

        setSelectedVoterIds(newSelections)
    }

    const deleteSelected = () => {
        onDeleteMultiple(selectedVoterIds)
    }

    const selector = (voter, i) => {
        return !inEditMode && <input
            type="checkbox"
            value={selectedVoterIds.includes(voter.id)}
            onChange={() =>
                onSelect(i)
            }
        />
    }

    return (
        <form>
            <button
                type="button"
                disabled={selectedVoterIds.length === 0}
                onClick={deleteSelected}
            >Delete Selected</button>
            <table>
                <thead>
                    <tr>
                        {!inEditMode &&
                            <th>Select</th>
                        }
                        {cols.map((col, i) => <SortColHeader key={i}
                            col={col} sortInfo={votersSort} onSort={sortVoters} />)}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voters.map((voter, i) =>
                        inEditMode && selectedVoterId === voter.id
                            ? <VoterEditRow key={voter.id}
                                voter={voter}
                                onCancel={onCancel}
                                onSubmit={updateVoter} />
                            : <VoterViewRow
                                key={voter.id}
                                voter={voter}
                                setEditMode={setEditMode}
                                onDelete={onDelete}
                                selector={selector(voter, i)}
                            />)}
                </tbody>
            </table>
        </form>
    );

}

// VoterTable.defaultProps = {
//     voters: [],
//     votersSort: {
//         column: 'id', direction: 1,
//     },
// };

// VoterTable.propTypes = {
//     voters: votersPropType.isRequired,
//     votersSort: PropTypes.shape({
//         column: PropTypes.string.isRequired,
//         direction: PropTypes.string.isRequired,
//     }).isRequired,
//     onSortVoters: PropTypes.func.isRequired,
//     onEditVoter: PropTypes.func.isRequired,
//     onDeleteVoter: PropTypes.func.isRequired,
//     onSaveVoter: PropTypes.func.isRequired,
//     onCancelVoter: PropTypes.func.isRequired,
// };