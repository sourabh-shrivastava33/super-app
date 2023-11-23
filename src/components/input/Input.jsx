import React from "react";
import inputCss from "./Input.module.css";
const Input = (props) => {
  const { error, errorMessage, children, handleChange, ...attribute } = props;

  if (attribute.type !== "checkbox") {
    return (
      <>
        <input
          {...attribute}
          className={`${inputCss.input} ${error ? inputCss.invalid : ""}`}
          onChange={handleChange}
        />
        {error && <p className={inputCss.error}>{errorMessage}</p>}
      </>
    );
  } else {
    return (
      <>
        <input
          {...attribute}
          checked={attribute.value}
          id={attribute.id}
          className={inputCss.share}
          onChange={handleChange}
        />
        <label htmlFor={attribute.id}>{children}</label>
        {error && <p className={inputCss.error}>{errorMessage}</p>}
      </>
    );
  }
};

export default Input;
