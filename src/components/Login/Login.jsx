import React, { useState, useReducer, useRef } from "react";
import "./Login.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 4 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 4 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 4);
  };

  const validateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else if (!passwordIsValid) {
      passwordRef.current.focus();
    }
    console.log(emailState.value, passwordState.value);
  };

  return (
    <>
      <Card className="login">
        <form onSubmit={submitFormHandler}>
          <div
            className={`${"control"} ${
              emailState.isValid === false ? "invalid" : " "
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmail}
            />
          </div>
          <div
            className={`${"control"} ${
              passwordState.isValid === false ? "invalid" : " "
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePassword}
            />
          </div>
          <div className="actions">
            <Button type="submit" >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Login;
