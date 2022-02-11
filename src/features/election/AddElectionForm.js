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
            ADD ELECTION
            <label>Title
                <input name="title" value={title} onChange={change} />
            </label>
            <label>Questions
                <textarea name="questions" value={questions} onChange={change} />
            </label>

            <button type="button" onClick={submit}>{submitText}</button>
        </div>
    )
}