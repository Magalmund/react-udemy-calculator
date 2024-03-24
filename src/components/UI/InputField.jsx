import React, {useContext} from 'react';
import {FormContext} from "../FormContext.js";


const InputField = ({field}) => {
    const {handleChange} = useContext(FormContext)
    return (
        <p>
            <label htmlFor={field.field_id}>{field.field_label}</label>
            <input
                id={field.field_id}
                name={field.field_id}
                type={field.field_type}
                placeholder={field.field_placeholder ? field.field_placeholder : ''}
                required={field.field_mandatory}
                value={field.field_value}
                onChange={event => handleChange(field.field_id, event)}
            />
        </p>
    );
};

export default InputField;
