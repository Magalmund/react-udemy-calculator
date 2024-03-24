import React, {useState} from "react";
import InputsGroup from "./components/InputsGroup.jsx";
import Table from "./components/UI/Table.jsx";
import {FORM_FIELDS} from "./data.js";
import {FormContext} from "./components/FormContext.js";


function App() {
    const [elements, setElements] = useState(FORM_FIELDS);
    const inputIsValid = elements[3].field_value >= 1;

    const handleChange = (id, event) => {
        const newElements = [...elements];
        newElements.forEach(field => {
            let {field_id} = field;
            if(id === field_id){
                field.field_value = +event.target.value;
            }
            setElements(newElements)
        })
    }
    return (
        <FormContext.Provider value={{handleChange}}>
            <InputsGroup elements={elements}/>
            {inputIsValid ? <Table elements={elements}/> : <p className="center">Please enter a duration greater than zero.</p>}
        </FormContext.Provider>
    )
}

export default App
