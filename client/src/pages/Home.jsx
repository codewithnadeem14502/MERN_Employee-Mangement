import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

import DataTable from "../components/DataTable";
const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/employee")
      .then((res) => {
        setLoading(false);
        setEmployees(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full bg-slate-100">
      {loading == true ? <Spinner /> : <DataTable employees={employees} />}
    </div>
  );
};

export default Home;
