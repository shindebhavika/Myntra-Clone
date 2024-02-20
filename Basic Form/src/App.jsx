import React, { useRef, useState } from "react";

function App() {
  const name = useRef("");
  const last = useRef("");
  const email = useRef("");

  const [values, setValues] = useState({
    name: "",
    last: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [click, setClick] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onClick = () => {
    setClick(!click);
    name.current.value = "";
    last.current.value = "";
    email.current.value = "";
    console.log("submitted");
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={onSubmit}>
        {click &&
          values.name !== "" &&
          values.last !== "" &&
          values.email !== "" && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          ref={name}
          onChange={() => setValues({ ...values, name: name.current.value })}
        />
        {submitted && !values.name ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          ref={last}
          onChange={() => setValues({ ...values, last: last.current.value })}
        />
        {submitted && !values.last ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          ref={email}
          onChange={() => setValues({ ...values, email: email.current.value })}
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button className="form-field" type="submit" onClick={onClick}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
