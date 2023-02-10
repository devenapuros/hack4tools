/* eslint-disable no-prototype-builtins */
import { useState } from "react";

export const useForm = (initialForm) => {
    const [form, setForm] = useState(structuredClone(initialForm));

    const setField = (field, value) => {
        if (form.hasOwnProperty(field)) {
            setForm({ ...form, [field]: value });
        }
    };

    const reset = () => {
        setForm(structuredClone(initialForm));
    };

    return { form, setField, reset };
};
