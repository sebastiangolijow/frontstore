import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import style from "./signup.module.scss";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(true);
  const [validated, setValidated] = useState({});
  const VAL = "validated";

  const handleState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    setValidated(validate(user));
  }, [user]);

  const created = async (e) => {
    e.preventDefault();
    let state = "waiting";
    for (const prop in errors) {
      if (errors[prop]) {
        state = false;
        break;
      } else {
        state = VAL;
      }
    }
    setSuccess(state);
    const confirmPost = await dispatch(postUser(user));
    if (confirmPost.status !== 400) {
      swal(
        "Welcome to Onestic!",
        {
          buttons: {
            button: "Ok",
          },
        }
      ).then((resp) => {
        resp && history.push("/");
      });
    } else {
      swal(confirmPost.message);
    }
  };

  return (
    <form className={style.container}>
      <div>
        <label
          className={errors.name && success === false ? style.danger : ""}
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={errors.name && success === false ? style.danger : ""}
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleState}
        />
      </div>
      <div>
        <label
          className={errors.lastName && success === false ? style.danger : ""}
          htmlFor="surname"
        >
          Surname
        </label>
        <input
          className={errors.lastName && success === false ? style.danger : ""}
          type="text"
          name="surname"
          placeholder="Surname"
          value={user.lastname}
          onChange={handleState}
        />
      </div>
      <div>
        <label
          className={errors.userName && success === false ? style.danger : ""}
          htmlFor="userName"
        >
          UserName
        </label>
        <input
          className={errors.userName && success === false ? style.danger : ""}
          type="text"
          name="userName"
          placeholder="Username"
          value={user.userName}
          onChange={handleState}
        />
      </div>
      <div>
        <label
          className={
            errors.email === "validate" || (errors.email && success === false)
              ? style.danger
              : ""
          }
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={
            errors.email === "validate" || (errors.email && success === false)
              ? style.danger
              : ""
          }
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleState}
        />
      </div>
      <div>
        <label
          className={
            errors.password === "validate" ||
            (errors.password && success === false)
              ? style.danger
              : ""
          }
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={
            errors.password === "validate" ||
            (errors.password && success === false)
              ? style.danger
              : ""
          }
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleState}
        />
        <span style={{position:'relative', top:'12px'}}>
          Use at least eight characters with a combination of letters, numbers,
          and symbols (@$!%*?&)
        </span>
        <button style={{position:'relative', top:'1rem'}}
          type="button"
          className={success === VAL ? style.successButton : style.simpleButton}
          onClick={(e) => created(e)}
        >
          SignUp
        </button>
      </div>
    </form>
  );
}

export function validate(user) {
  var error = {};
  for (const prop in user) {
    if (prop === "email") {
      if (user[prop] && !/\S+@\S+\.\S+/.test(user[prop])) {
        error[prop] = "validate";
      } else if (!user[prop]) {
        error[prop] = true;
      } else {
        error[prop] = false;
      }
    } else if (prop === "password") {
      if (
        user[prop] &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
          user[prop]
        )
      ) {
        error[prop] = "validate";
      } else if (!user[prop]) {
        error[prop] = true;
      } else {
        error[prop] = false;
      }
    } else if (!user[prop]) {
      error[prop] = true;
    } else {
      error[prop] = false;
    }
  }
  return error;
}
