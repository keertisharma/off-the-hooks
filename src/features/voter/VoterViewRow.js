//import PropTypes from 'prop-types';
import { memo } from 'react';
// import { FaAirFreshener } from "react-icons/fa";

//import { voterPropType } from './voterToolPropTypes';

export const VoterViewRow = memo(({
    voter,
    setEditMode,
    onDelete,
    selector,
    inEditMode,
}) => {

    return (
        <tr>
            {!inEditMode &&
                <td>{selector}</td>
            }
            <td>{voter.id}</td>
            <td>{voter.first_name}</td>
            <td>{voter.last_name}</td>
            <td>{voter.address}</td>
            <td>{voter.city}</td>
            <td>{voter.birth_date}</td>
            <td>{voter.email}</td>
            <td>{voter.phone}</td>
            {/* <FaAirFreshener></FaAirFreshener> */}
            <td>
                <button type="button" className='btn btn-primary'
                    onClick={() => setEditMode(voter.id)}>
                    Edit</button>
                    <p></p>
                <button type="button" className='btn btn-danger'
                    onClick={() => onDelete(voter.id)}>
                    Delete</button>
            </td>
        </tr>
    );


});

// VoterViewRow.propTypes = {
//     voter: voterPropType.isRequired,
//     onEditVoter: PropTypes.func.isRequired,
//     onDeleteVoter: PropTypes.func.isRequired,
// };