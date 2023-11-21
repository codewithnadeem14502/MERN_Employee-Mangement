import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
const Edit = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/employee/${id}`)
      .then((res) => {
        setName(res.data.name);
        setCompany(res.data.company);
        setRole(res.data.role);
        setSalary(res.data.salary);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handlesaveEmployeeDetails = () => {
    setLoading(true);
    const data = {
      name,
      company,
      role,
      salary,
    };
    axios
      .put(`http://localhost:5000/employee/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Update successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
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
          onClick={handlesaveEmployeeDetails}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
