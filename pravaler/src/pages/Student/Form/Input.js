import React from "react";
import ReactInputMask from "react-input-mask";

const Input = ({id, label, onChange, value, type, onBlur, placeholder, error, mask, disabled}) => {
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <ReactInputMask id={id}
            className="input"
            disabled={disabled}
            name={id}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
            value={value}
            mask={mask}/>
            {error && <p className="error" >{error}</p>}
        </>
    )
}



export default Input;