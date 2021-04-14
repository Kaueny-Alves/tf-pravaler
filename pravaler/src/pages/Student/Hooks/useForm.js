import React from 'react';

const types ={
    name: {
        regex: /[A-Z][a-z]* [A-Z][a-z]*/,
        message: 'Escreva corretamente.'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  ,
        message: 'Email inválido'
    },
    phone: {
        regex: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[1-9])\d{3})\-?(\d{4}))$/,
        message: 'Celular inválido'
    },
    cpf: {
        regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        message: 'CPF inválido'
    },
}

const useForm = (type) => {
    const [value,setValue] = React.useState("")
    const [error, setError] = React.useState("")

    function validate(value){
        if (value.length === 0){
           setError("Preencha o campo")
           return false 
        }else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }else{
            setError(null)
            return true
        }
    }

    function onChange({target}){
        if (error) validate(target.value);
        setValue(target.value)
    }

    return{
        value, setValue, error, onChange, onBlur: () => validate(value),
        validate: () => validate(value),
    }
}
export default useForm;