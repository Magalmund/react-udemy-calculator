import React from 'react';
import InputField from "./UI/InputField.jsx";

const InputsGroup = ({elements}) => {

    return (
        <div id="user-input">
            <div className="input-group">
                {elements.map(field => (
                    <InputField
                        key={field.field_id}
                        field={field}
                    />
                ))}
            </div>
        </div>
    );
};

export default InputsGroup;
