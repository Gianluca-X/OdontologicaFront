import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
      setSubmitted(true);

    } else {
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContact">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button className="contactButton" type="submit">
          Submit
        </button>
      </form>
      {submitted? (
        <b>
          Thank you {formData.name}, we will contact you via email as soon as possible.
        </b>
      ) : (Object.keys(errors).length > 0 ? (
        <p className="error">Please verify your information again!</p>
      ):null)}
    </div>
  );
};

export default Form;
