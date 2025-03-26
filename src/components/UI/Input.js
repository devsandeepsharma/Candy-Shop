import { useState } from "react";

import "./input.css";

const Input = ({htmlFor, labelText, errText, ref, ...props}) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="input">
            <label className="input-lable" htmlFor={htmlFor}>{labelText}</label>
            <input 
                className="input-box" 
                id={htmlFor} 
                value={value}
                onChange={handleChange}
                ref={ref}
                {...props} 
            />
            {errText && <p className="input-err">{errText}</p>}
        </div>
    )
}

export default Input;