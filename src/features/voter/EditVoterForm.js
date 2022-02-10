import { useForm } from "../../hooks/useForm"

export const EditVoterForm = ({ voter, submitText, onSubmit }) => {
    const {id, ...voterFormData }= voter

    const { form, change } = useForm(voterFormData)

    const { first_name, last_name, address, city, birth_date, email, phone } = form

    const Row = ({ label, name, value }) => {
        const id = `edit-user-form-row-${name}`
        
        return (
            <div className="edit-user-form-row">
                <label htmlFor={id}>{label}</label>
                <input name={name} value={value} id={id} onChange={change} />
            </div>
        )
    }

    return (
        <div>
            EDIT VOTER
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