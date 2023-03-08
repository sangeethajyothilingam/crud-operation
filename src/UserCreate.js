import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function UserCreate({ data, setData }) {
  const navigate = useNavigate();
  const myFormik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.id) {
        errors.id = "Please enter a number";
      }
      if (!values.name) {
        errors.name = "Please enter a value";
      } else if (values.name.length < 3) {
        errors.name = "length should be greater than 3";
      } else if (values.name.length > 15) {
        errors.name = "length should be less than 15";
      }

      if (!values.email) {
        errors.email = "Please enter a email";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Please enter a valid email";
      }

      if (!values.country) {
        errors.country = "Please enter a value";
      }
      if (!values.state) {
        errors.state = "Please enter a value";
      }
      if (!values.city) {
        errors.city = "Please enter a value";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("form values", values);
      setData([...data, values]);
      navigate("/portal/userlist");
    },
  });
  return (
    <div classNme="container">
      <form onSubmit={myFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>ID</label>
            <input
              name="id"
              value={myFormik.values.id}
              onChange={myFormik.handleChange}
              type={"text"}
              className={`form-control ${
                myFormik.errors.id ? "is-invalid" : "is-valid"
              }`}
            ></input>
            <span style={{ color: "red" }}>{myFormik.errors.id}</span>
          </div>
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="name"
              value={myFormik.values.name}
              onChange={myFormik.handleChange}
              type={"text"}
              className={`form-control ${
                myFormik.errors.name ? "is-invalid" : "is-valid"
              }`}
            ></input>
            <span style={{ color: "red" }}>{myFormik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label>E-mail</label>
            <input
              name="email"
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              type={"text"}
              className={`form-control ${
                myFormik.errors.email ? "is-invalid" : "is-valid"
              }`}
            ></input>
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>
          <div className="col-lg-6">
            <label>Country</label>
            <select
              name="country"
              value={myFormik.values.country}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.country ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>--SELECT--</option>
              <option value={"IN"}>India</option>
              <option value={"USA"}>America</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>
          <div className="col-lg-6">
            <label>State</label>
            <select
              name="state"
              value={myFormik.values.state}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.state ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>--SELECT--</option>
              <option value={"TN"}>Tamilnadu</option>
              <option value={"AZ"}>Arizona</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>
          <div className="col-lg-6">
            <label>City</label>
            <select
              name="city"
              value={myFormik.values.city}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.city ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>--SELECT--</option>
              <option value={"CH"}>Chennai</option>
              <option value={"PX"}>Phoenix</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>
          <div className="col-lg-3 mt-3">
            <button type="submit" className="btn btn-primary create-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
