import Task from "../models/task_model.js"

export const getTasks = async (req,res) =>{
    try{
        const tasks = await Task.find({
        user: req.user.id
    }).populate("user");
    res.json(tasks);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener las tareas"});
    }
}

export const createTask = async (req,res) =>{
    try{
        const {title,descripcion,date} = req.body;

    const newTask = new Task({
        title,
        descripcion,
        date,
        user: req.user.id,
    });
    const taskSave = await newTask.save();
    res.json(taskSave);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al crear la tarea"});
    }   
}

export const getTask = async (req,res) =>{

    try{
        const task = await Task.findById(req.params.id).populate("user");
    if(!task) return res.status(404).json({message:"Tarea no econtrada"});

    res.json(task);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener la tarea"});
    }   
}
export const deleteTask = async (req,res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message:"Tarea no econtrada"});

    return res.sendStatus(204);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al eliminar la tarea"});
    }   

}
export const updateTask = async (req,res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    });
    if(!task) return res.status(404).json({message:"Tarea no econtrada"});

    res.json(task);   
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al actualizar la tarea"});
    }
}

