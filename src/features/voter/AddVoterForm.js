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

    const { first_name, last_name, address, city, birth_date, email, phone } = form

    const Row = ({ label, name, value }) => {
        const id = `add-user-form-row-${name}`
        
        return (
            <div className="add-user-form-row">
                <label htmlFor={id}>{label}</label>
                <input name={name} value={value} id={id} onChange={change} />
            </div>
        )
    }

    return (
        <div>
            ADD VOTER
            <Row label="First Name" name="first_name" value={first_name} />
            <Row label="Last Name" name="last_name" value={last_name} />
            <Row label="Address" name="address" value={address} />
            <Row label="City" name="city" value={city} />
            <Row label="Birth Date" name="birth_date" value={birth_date} />
            <Row label="Email" name="email" value={email} />
            <Row label="Phone" name="phone" value={phone} />

            <button type="button" onSubmit={onSubmit}>{submitText}</button>
        </div>
    )
}