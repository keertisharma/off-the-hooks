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

export const AddVoterForm = ({ onSubmit, onCancel }) => {
    const { form, change, resetForm } = useForm(initialForm)

    const submit = () => {
        onSubmit({ ...form })
        resetForm()
    }

    const cancel = () => {
        onCancel()
        resetForm()
    }

    const { first_name, last_name, address, city, birth_date, email, phone } = form

    return (<>
        <form>
            <div className="form-group row">
                <div className="col-sm-6">
                    {/* ADD VOTER */}
                </div>
            </div>
            <div className="form-group"></div>
            <div className="form-group row mt-6">
                <label className="col-sm-2 col-form-label" >First Name </label>
                <div className="col-sm-4">
                    <input name={'first_name'} value={first_name} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-4">
                    <input name={'last_name'} value={last_name} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-4">
                    <input name={'address'} value={address} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-4">
                    <input name={'city'} value={city} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Birth Date</label>
                <div className="col-sm-4">
                    <input name={'birth_date'} value={birth_date} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-4">
                    <input name={'email'} value={email} className="form-control" onChange={change} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-4">
                    <input name={'phone'} value={phone} className="form-control" onChange={change} />
                </div>
            </div>

            <div className="form-group row mt-4">
                <div className="col-sm-1"></div>
                <button type="button" className="btn btn-primary col-sm-3 " onClick={submit}>Complete Registration</button>
                <div className="col-sm-2"></div>
                <button type="button" className="btn btn-secondary col-sm-2" onClick={cancel}>Cancel</button>
            </div>
        </form>
    </>
    )
}