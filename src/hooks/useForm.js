import { useState } from "react"

export const useForm = (initialForm) => {
    const [form, setForm] = useState({ ...initialForm })

    const change = (evt) => {
        const { target: { name, value, type: targetType } } = evt

        setForm({
            ...form,
            [name]: targetType === 'number' ?
                parseInt(value, 10)
                : value,
        })
    }

    const resetForm = () => setForm({ ...initialForm })

    return {
        form,
        change,
        resetForm,
    }
}
