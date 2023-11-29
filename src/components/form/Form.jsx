import React from "react";
import Input from "../input/Input";
import { useState } from "react";
import formCss from "./Form.module.css";
import FormFooter from "./FormFooter";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [values, setValues] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
    Share: false,
  });
  const [error, setError] = useState({
    Name: false,
    UserName: false,
    Email: false,
    Mobile: false,
    Share: false,
  });
  const navigate = useNavigate();
  const fields = Object.keys(values);
  const types = {
    Name: "text",
    UserName: "text",
    Email: "email",
    Mobile: "number",
    Share: "checkbox",
  };

  function handleChange(e) {
    if (e.target.type !== "checkbox") {
      setValues({ ...values, [e.target.placeholder]: e.target.value });
      if (e.target.value && error[e.target.placeholder]) {
        setError({ ...error, [e.target.placeholder]: false });
      }
    } else {
      setValues({ ...values, [e.target.id]: e.target.checked });
      if (e.target.value && error[e.target.id]) {
        setError({ ...error, [e.target.id]: false });
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!values.Name) {
      setError((prev) => {
        return { ...prev, Name: true };
      });
    }
    if (!values.UserName) {
      setError((prev) => {
        return { ...prev, UserName: true };
      });
    }
    if (!values.Email) {
      setError((prev) => {
        return { ...prev, Email: true };
      });
    }
    if (!values.Mobile) {
      setError((prev) => {
        return { ...prev, Mobile: true };
      });
    }
    if (!values.Share) {
      setError((prev) => {
        return { ...prev, Share: true };
      });
    }
    if (fields.filter((field) => !values[field]).length > 0) {
      return;
    } else {
      localStorage.setItem("formValues", JSON.stringify(values));
      navigate("/genre", { replace: true });
    }
  }

  return (
    <form className={formCss.form} onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (field !== "Share") {
          return (
            <Input
              value={values[field]}
              error={error[field]}
              errorMessage="Field is required"
              type={types[field]}
              placeholder={field}
              key={field}
              handleChange={handleChange}
            />
          );
        } else {
          return (
            <Input
              value={values[field]}
              error={error[field]}
              errorMessage="Check this box if you want to proceed"
              type={types[field]}
              id={field}
              key={field}
              handleChange={handleChange}
            >
              Share my registration data with Superapp
            </Input>
          );
        }
      })}
      <button className={formCss.submit}>Sign up</button>
      <FormFooter />
    </form>
  );
};

export default Form;
