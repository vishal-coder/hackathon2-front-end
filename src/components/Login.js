import React, { useState } from "react";
import "../CreateUser.css";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  const navigate = useNavigate();
  const userValidation = Yup.object({
    username: Yup.string()
      .required("Please Enter Your Username")
      .min(5)
      .email(),
    password: Yup.string().required("Please Enter Your Password").min(6),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: userValidation,
    onSubmit: (values) => {
      fetch(`${process.env.REACT_APP_API}/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((messages) => {
          console.log("messages after login", messages);

          navigate("/Dashboard");
        });
    },
  });

  console.log(formik.values);
  console.log(formik.errors);
  return (
    <>
      {" "}
      <div className="createuser-Parent ">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div className="createuser">
              <div className="input-container">
                <input
                  type="email"
                  value={formik.values.username}
                  placeholder="Enter your Email"
                  onChange={formik.handleChange}
                  name="username"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p className="validation-error-message">
                    {formik.errors.username}
                  </p>
                ) : null}
              </div>
              <div className="input-container">
                <input
                  type="password"
                  value={formik.values.password}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  name="password"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="validation-error-message">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="form-group row">
                <button type="submit"> Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
