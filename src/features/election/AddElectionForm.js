import { useForm } from "../../hooks/useForm"

const initialForm = {
    title: '',
    questions: '',
}

export const AddElectionForm = ({ submitText, onSubmit }) => {
    const { form, change, resetForm } = useForm(initialForm)

    const { title, questions } = form

    const submit = () => {
        onSubmit({
            title,
            questions: questions.split("\n"),
        })
        resetForm()
    }

    return (
        <div className="add-election">
            <h4>ADD ELECTION</h4>
            <div className="form-group row mt-6">
                <label className="col-sm-2 col-form-label" >Title </label>
                <div className="col-sm-4">
                    <input name="title" value={title} onChange={change} />
                </div>
            </div>

            <div className="form-group row mt-6">
                <label className="col-sm-2 col-form-label" >Questions </label>
                <div className="col-sm-4">
                    <textarea name="questions" value={questions} onChange={change} />
                </div>
            </div>

            {/* <label>Title
                <input name="title" value={title} onChange={change} />
            </label> */}
            {/* <label>Questions
                <textarea name="questions" value={questions} onChange={change} />
            </label> */}
             <div className="form-group row mt-4">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                     <button type="button" className="btn btn-primary"  onClick={submit}>{submitText}</button>
                </div>
                <div className="col-sm-4"></div>
             </div>
            
        </div>
    )
}