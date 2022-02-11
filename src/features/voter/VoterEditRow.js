//import { carPropType } from '../carToolPropTypes';
import { useForm } from '../../hooks/useForm';

export const VoterEditRow = ({
                               voter,
                               onCancel,
                               cancelVoter,
                               updateVoter,
                               onSubmit,
                           }) => {

    const { id, ...voterFormData } = voter

    const { form, change, resetForm } = useForm(voterFormData)

    const submit = () => { 
        console.log(" ID in Save ", id)
        onSubmit(
            { ...form,
                id: id }
            )
        resetForm()
     }

     const cancel = () => {
         resetForm()
         onCancel()
     }

    const { first_name, last_name, address, city, birth_date, email, phone } = form


    return (
        <tr>
            <td>{id}</td>
            <td><input type="text" name="first_name" 
                       value={first_name} onChange={change} /></td>
            <td><input type="text" name="last_name"
                       value={last_name} onChange={change} /></td>
            <td><input type="text" name="address"
                       value={address} onChange={change} /></td>
            <td><input type="text" name="city"
                       value={city} onChange={change} /></td>
            <td><input type="text" name="birthdate"
                       value={birth_date} onChange={change} /></td>
            <td><input type="text" name="email"
                       value={email} onChange={change} /></td>
            <td><input type="text" name="phone"
                       value={phone} onChange={change} /></td>
            <td>
                <button type="button" onClick={submit}>Save</button>
                <button type="button" onClick={cancel}>Cancel</button>
            </td>
        </tr>
    );


};

// CarEditRow.propTypes = {
//     car: carPropType.isRequired,
//     onSaveCar: PropTypes.func.isRequired,
//     onCancelCar: PropTypes.func.isRequired,
// };

