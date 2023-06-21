import React, { useState } from "react";
import Container from "../components/container";
import Devider from "../components/devider";
import Field from "../components/field";

type ValuesType = {
  firstName: string;
  lastName: string;
  email: string;
};

const Contact = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputsValue = (id: string) => (value: string) => {
    setInputsValue((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <Container>
      <h1>contact page</h1>
      <Devider />
      <div>
        <Field
          label="First Name"
          id="firstName"
          value={inputsValue.firstName}
          onChange={handleInputsValue("firstName")}
        />
        <Field
          label="Last Name"
          id="lastName"
          value={inputsValue.lastName}
          onChange={handleInputsValue("lastName")}
        />
        <Field
          label="E-Mail"
          id="email"
          value={inputsValue.email}
          onChange={handleInputsValue("email")}
        />
      </div>
      <Devider />
      <button className="btn btn--red" type="submit">
        Submit
      </button>
    </Container>
  );
};

export default Contact;
