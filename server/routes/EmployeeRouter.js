import { employee } from "../models/EmpolyeModel.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await employee.find({});
    if (!data) return res.status(500).send({ message: "NO Data" });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await employee.findByIdAndUpdate(id);
    if (!data) return res.status(404).send({ message: "Employee Not Found" });
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.company ||
      !req.body.role ||
      !req.body.salary
    ) {
      return res.status(401).send({ message: "Send all the required Field" });
    }
    const newEmployee = {
      name: req.body.name,
      company: req.body.company,
      role: req.body.role,
      salary: req.body.salary,
    };
    const data = await employee.create(newEmployee);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (
      !req.body.name ||
      !req.body.company ||
      !req.body.role ||
      !req.body.salary
    ) {
      return res.status(401).send({ message: "Send all the required Field" });
    }
    const data = await employee.findByIdAndUpdate(id, req.body);
    if (!data) return res.status(404).send({ message: "Employee Not Found" });
    res.status(200).send({ message: "Employee Data Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await employee.findByIdAndDelete(id);
    if (!data) return res.status(404).send({ message: "Employee NOT FOUND" });

    res.status(200).send({ message: "Employee Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
