import { useForm } from "../../hooks/useForm"

const initialForm = {
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    birth_date: '',
    email: '',
    phone: '',
}

export const AddVoterForm = ({ submitText, onSubmit }) => {
    const { form, change } = useForm(initialForm)

    console.log({form})

    const { first_name, last_name, address, city, birth_date, email, phone } = form

    return (
        <div>
            ADD VOTER
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

            <button type="button" onSubmit={onSubmit}>{submitText}</button>
        </div>
    )
}