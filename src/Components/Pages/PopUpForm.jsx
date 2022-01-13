import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/Actions/actions";
import { Link } from "react-router-dom";

const PopUpForm = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState([
    {
      designation: "",
      company: "",
      workingFrom: "",
      workingTo: "",
      city: "",
    },
  ]);
  let handleForm = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let submitData = e => {
    e.preventDefault();
    dispatch(addData(state));
  };
  return (
    <div>
      <form className="w-full max-w-lg">
        <span className="bg-red-500">
          <Link to="/"> close</Link>
        </span>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Designation
          </label>
          <input
            onChange={handleForm}
            name="designation"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Company
          </label>
          <input
            onChange={handleForm}
            name="company"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Working From
            </label>
            <input
              onChange={handleForm}
              name="workingFrom"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Working To
            </label>
            <input
              onChange={handleForm}
              name="workingTo"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6"></div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            city
          </label>
          <input
            onChange={handleForm}
            name="city"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <button onClick={submitData}>submit</button>
      </form>
    </div>
  );
};

export default PopUpForm;
