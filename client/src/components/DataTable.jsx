import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const DataTable = ({ employees }) => {
  return (
    <>
      <div className="w-full bg-yellow-400 p-5 flex justify-evenly">
        <h1 className="text-2xl font-mono">Employee Mangement</h1>
        <Link to="/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 bg-cyan-200 rounded-md">
              S/No
            </th>
            <th className="border border-slate-600 bg-cyan-200 rounded-md">
              {" "}
              Name
            </th>
            <th className="border border-slate-600 bg-cyan-200 rounded-md max-md:hidden">
              Company
            </th>
            <th className="border border-slate-600 bg-cyan-200 rounded-md max-md:hidden">
              Role
            </th>
            <th className="border border-slate-600 bg-cyan-200 rounded-md max-md:hidden">
              Salary
            </th>
            <th className="border border-slate-600 bg-cyan-200 rounded-md">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employe, index) => (
            <tr key={employe._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {employe.name}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {employe.company}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {employe.role}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {employe.salary}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-3">
                  <Link to={`/edit/${employe._id}`}>
                    {/* edit */}
                    <AiOutlineEdit className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/details/${employe._id}`}>
                    {/* detials */}
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/delete/${employe._id}`}>
                    {/* delete */}
                    <MdOutlineDelete className="text-2xl text-green-800" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
