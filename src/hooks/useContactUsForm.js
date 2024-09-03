import { useState } from "react";

const useContactUsForm = () => {

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
            console.log(formData);
        } catch (error) {
            console.error(error)
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit
    }
}

export default useContactUsForm