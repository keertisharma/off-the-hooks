import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

//import { carPropType } from '../carToolPropTypes';
import { useForm } from '../../hooks/useForm';

export const VoterEditRow = ({
                               voter,
                               onCancel,
                               cancelVoter,
                               updateVoter,
                           }) => {

    const makeControl = useRef();

    useEffect(() => {

        if (makeControl.current) {
            makeControl.current.focus();
        }

    }, []);

    const [ voterForm, change ] = useForm({
        first_name: voter.first_name,
        last_name: voter.last_name,
        address: voter.address,
        city: voter.city,
        birth_date: voter.birth_date,
        email: voter.email,
        phone: voter.phone,
    });

    const saveVoter = () => {
        updateVoter({
            ...voterForm,
            id: voter.id,
        });
    };


    return (
        <tr>
            <td>{voter.id}</td>
            <td><input type="text" name="first_name" ref={makeControl}
                       value={voterForm.first_name} onChange={change} /></td>
            <td><input type="text" name="last_name"
                       value={voterForm.last_name} onChange={change} /></td>
            <td><input type="text" name="address"
                       value={voterForm.address} onChange={change} /></td>
            <td><input type="text" name="city"
                       value={voterForm.city} onChange={change} /></td>
            <td><input type="text" name="birthdate"
                       value={voterForm.birthdate} onChange={change} /></td>
            <td><input type="text" name="email"
                       value={voterForm.email} onChange={change} /></td>
            <td><input type="text" name="phone"
                       value={voterForm.phone} onChange={change} /></td>
            <td>
                <button type="button" onClick={saveVoter}>Save</button>
                <button type="button" onClick={cancelVoter}>Cancel</button>
            </td>
        </tr>
    );


};

// CarEditRow.propTypes = {
//     car: carPropType.isRequired,
//     onSaveCar: PropTypes.func.isRequired,
//     onCancelCar: PropTypes.func.isRequired,
// };

