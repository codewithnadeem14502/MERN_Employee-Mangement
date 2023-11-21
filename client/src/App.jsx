import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";
import Update from "./pages/Update";
import Details from "./pages/Details";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/delete/:id" element={<Delete />} />
    </Routes>
  );
};

export default App;
