import { useForm } from "../../hooks/useForm"

export const EditVoterForm = ({ voter, onSubmit, onCancel }) => {
    const { id, ...voterFormData } = voter

    const { form, change, resetForm } = useForm(voterFormData)

    const submit = () => { 
        onSubmit({ ...form })
        resetForm()
     }

     const cancel = () => {
         resetForm()
         onCancel()
     }

    const { first_name, last_name, address, city, birth_date, email, phone } = form

    return (
        <div>
            ADD VOTER
            <div>ID: {id}</div>
            <label>First Name
                <input name={'first_name'} value={first_name} onChange={change} />
            </label>
            <label>Last Name
                <input name={'last_name'} value={last_name} onChange={change} />
            </label>
            <label>Address
                <input name={'address'} value={address} onChange={change} />
            </label>
            <label>City
                <input name={'city'} value={city} onChange={change} />
            </label>
            <label>Birth Date
                <input name={'birth_date'} value={birth_date} onChange={change} />
            </label>
            <label>Email
                <input name={'email'} value={email} onChange={change} />
            </label>
            <label>Phone
                <input name={'phone'} value={phone} onChange={change} />
            </label>

            <button type="button" onClick={submit}>Submit</button>
            <button type="button" onClick={cancel}>Cancel</button>
        </div>
    )
}