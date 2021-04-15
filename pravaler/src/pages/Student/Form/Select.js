import React from "react";

const Select = ({ event ,options, value, setValue, ...props }) => {
  return (
    <>
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          {" "}
          Selecione{" "}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
     
    </>
  );
};

export default Select;
