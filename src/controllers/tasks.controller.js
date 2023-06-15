import taskModel from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await taskModel
    .find({
      user: req.user.id,
    })
    .populate("user");
  if (!tasks) return res.status(404).json({ message: "Tasks not found" });
  res.json(tasks);
};
export const getTask = async (req, res) => {
  const task = await taskModel
    .findOne({ _id: req.params.id, user: req.user.id })
    .populate("user");
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};
export const createTasks = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new taskModel({
    title,
    description,
    date,
    user: req.user.id,
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
};
export const updateTasks = async (req, res) => {
  const { title, description, date } = req.body;
  const taskUpdated = await taskModel.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      date,
      user: req.user.id,
    },
    {
      new: true,
    }
  );
  if (!taskUpdated) return res.status(404).json({ message: "Task not found" });
  res.json(taskUpdated);
};
export const deleteTasks = async (req, res) => {
  const taskDeleted = await taskModel.findByIdAndDelete(req.params.id);
  if (!taskDeleted) return res.status(404).json({ message: "Task not found" });
  res.sendStatus(204);
};
