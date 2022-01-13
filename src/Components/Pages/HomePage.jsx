import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  let dispatch = useDispatch();
  let empData = useSelector(val => val.data.user);

  return (
    <>
      <div>
        <table className="border-8">
          <tr className="bg-slate-300">
            <td className="px-14 border-red-50">Designation</td>
            <td className="px-14">Compant</td>
            <td className="px-14">WorkingFrom</td>
            <td className="px-14">Working To</td>
            <td className="px-14">City</td>
            <td className="px-14">
              <span className="hover:cursor-pointer">
                <Link to="/pop">+</Link>
              </span>
            </td>
          </tr>
          {empData.map(e => (
            <tr>
              <td className="px-14">{e.designation}</td>
              <td className="px-14">{e.company}</td>
              <td className="px-14">{e.workingFrom}</td>
              <td className="px-14">{e.workingTo}</td>
              <td className="px-14">{e.city}</td>
              <td className="bg-green-300">edit</td>
              <td className="bg-red-300">delete</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default HomePage;
