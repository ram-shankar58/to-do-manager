import { useState } from "react";


function Form(props){
    function handleChange(event){
        setName(event.target.value);
    }

    function handleSubmit(event){
        const [name, setName]=useState("");
        event.preventDefault();
        props.addTask("Say hello");
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="newtodoinput" className="label_lg">
                    What needs to be done?
                </label>
            </h2>
            <input type="text" name="text" id="new-todo-input" autoComplete="off" className="input input__lg" value={name} onChange={handleChange}/>
            <button type="submit" className="btn btn_primary btn__lg">
                Add
            </button>

        </form>
        </>
    );
}

export default Form;