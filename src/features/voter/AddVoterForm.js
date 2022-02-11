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
            <div class="form-group row">
                <div class="col-sm-6">
                    ADD VOTER
                </div>
            </div>
            <div class="form-group"></div>
            <div class="form-group row mt-6">
                <label class="col-sm-2 col-form-label" >First Name </label>
                <div class="col-sm-4">
                    <input name={'first_name'} value={first_name} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-4">
                    <input name={'last_name'} value={last_name} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-4">
                    <input name={'address'} value={address} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-4">
                    <input name={'city'} value={city} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Birth Date</label>
                <div class="col-sm-4">
                    <input name={'birth_date'} value={birth_date} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-4">
                    <input name={'email'} value={email} class="form-control" onChange={change} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-4">
                    <input name={'phone'} value={phone} class="form-control" onChange={change} />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-1"></div>
                <button type="button" class="btn btn-primary col-sm-2 " onClick={submit}>Submit</button>
                <div class="col-sm-2"></div>
                <button type="button" class="btn btn-secondary col-sm-2" onClick={cancel}>Cancel</button>
            </div>
        </form>
    </>
    )
}