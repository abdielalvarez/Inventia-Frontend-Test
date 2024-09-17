import { useState } from "react";

const useContactUsForm = (onSubmit) => {

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (onSubmit) {
                await onSubmit(formData)
            }
        } catch (error) {
            return error
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit
    }
}

export default useContactUsForm