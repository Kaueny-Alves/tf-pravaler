import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";

const InputCurrecy = ({id, label, onChange, value, type, onBlur, placeholder, error, mask, currencyConfig, currency, disabled}) => {
    
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <IntlCurrencyInput id={id}
            disabled={disabled}
            currency={currency} 
            config={currencyConfig}
            name={id}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
            value={value}
            mask={mask}/>
            {error && <p>{error}</p>}
        </>
    )
}
export default InputCurrecy;