import { useForm } from '../../hooks/useForm'

const initialValues = { email: '' };

export const VoterLogin = ({onSubmit, onCancel}) => {

    const { form, change } = useForm({...initialValues})
    
    return (
        <div>
            Voter Login
            <input type="text" name="email" value={form.email} onChange={change} />  
            <button type="button" onClick={() => onSubmit(form)} >Submit</button>
            <button type="button" onClick={onCancel} >Cancel</button>
        </div>
    );
}