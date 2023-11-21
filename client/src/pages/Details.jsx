import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employee/${id}`)
      .then((res) => {
        setLoading(false);
        setEmployees(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="w-full h-screen bg-slate-100">
      <h1 className="p-5 m-2 font-mono text-2xl">{employees.name} Details </h1>
      <div className=" md:w-[50%] bg-cyan-200 mx-5 md:m-5 md:p-5 border-black border-2">
        <h1 className="m-2 font-mono text-xl">Name : {employees.name}</h1>
        <h2 className="m-2 font-mono text-xl">
          {" "}
          Company Name: {employees.company}
        </h2>
        <h2 className="m-2 font-mono text-xl">Role : {employees.role}</h2>
        <h2 className="m-2 font-mono text-xl">Salary :{employees.salary} </h2>
      </div>
    </div>
  );
};

export default Details;
