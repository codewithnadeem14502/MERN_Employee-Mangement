import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleCreateEmployee = () => {
    setLoading(true);
    const data = {
      name,
      company,
      role,
      salary,
    };
    axios
      .post("http://localhost:5000/employee", data)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Employee Created successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened. Please Chack console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className="w-full h-screen bg-slate-100">
      <h1 className="text-2xl font-mono m-5 p-2">Edit Page</h1>
      <div className="w-[90%] bg-cyan-200 m-5 p-5 border-black border-2 flex flex-col justify-center ">
        <input
          type="text"
          placeholder="name"
          className="m-2 p-3 bg-slate-50 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="company"
          className="m-2 p-3 bg-slate-50 rounded-lg"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="role"
          className="m-2 p-3 bg-slate-50 rounded-lg"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          type="text"
          placeholder="salary"
          className="m-2 p-3 bg-slate-50 rounded-lg"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button
          className="bg-green-500 text-2xl m-5 p-3 rounded-lg font-bold"
          onClick={handleCreateEmployee}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Create;
