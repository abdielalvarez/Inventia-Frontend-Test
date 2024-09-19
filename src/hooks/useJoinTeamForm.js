import { useState } from "react";

const useJoinTeamForm = (onSubmit) => {

    const [formData, setFormData] = useState({});

    const handleChange = (value, name) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDelete = (index, name) => {
        setFormData(prevState => {
            const existingFiles = prevState[name] || [];
            const updatedFiles = existingFiles.filter((_, i) => i !== index);
            return {
                ...prevState,
                [name]: updatedFiles
            };
        });
    };

    const handleFileChange = (files, name) => {
        const newFiles = Array.from(files);
        setFormData(prevState => {
            const existingFiles = prevState[name] || [];
            return {
                ...prevState,
                [name]: [...existingFiles, ...newFiles]
            };
        });
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
        handleSubmit,
        handleFileChange,
        handleDelete
    }
}

export default useJoinTeamForm