const mongoose = require('mongoose');
const Project = require("../models/projectModel");
const Client = require("../models/clientModel");


const getTopProjects = async (req, res) => {
  try {
    const topProjects = await Project.find()
      .populate("client")
      .sort({ budget: -1 })
      .limit(10);

    res.status(200).json(topProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProject = async (req, res) => {
  const { name, client, budget, deadline } = req.body;

  if (!name || !client || !budget || !deadline) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!mongoose.Types.ObjectId.isValid(client)) {
    return res.status(400).json({ message: "Invalid client ID format." });
  }

  try {
    //if project exists
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(400).json({ message: "Project with this name already exists." });
    }

    //if client exists
    const existingClient = await Client.findById(client);
    if (!existingClient) {
      return res.status(404).json({ message: "Client not found." });
    }

    //create project and save to the database
    const newProject = new Project({ name, client, budget, deadline });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopProjects, addProject };