import React, { useState } from "react";
import { use } from "react";

function ToDoList() {
  const [task, setTask] = useState([]); //List Task State
  const [input, setInput] = useState(""); //Input State
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    // if (input.trim()) {
    //   setTask([...task, input]);
    //   setInput("");
    // }

    if(editIndex!==null){
      const updateData=[...task]
      updateData[editIndex]=input
      setTask(updateData)
      setEditIndex(null)
    }else{
      setTask([...task,input])
    }
    setInput('')
  };

  const deleteTask = (index) => {
    setTask(
      task.filter((element, id) => {
        return index != id; 
      })
    );
  };
  
  const editTask=(index)=>{
    setInput(task[index])
    setEditIndex(index)
  }

  const removeData = () => {
    setTask([]);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   h-screen flex flex-col items-center justify-between">
      <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 rounded-lg w-96 p-6 mt-10">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
          To-Do List
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter Task"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 rounded-r-lg"
            onClick={addTask}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <ul className="space-y-2">
          {task.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm "
            >
              <span>{item}</span>
              <div>
                <button
                  onClick={() => editTask(index)}
                  className="bg-green-500 text-white px-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {task.length >= 1 ? (
          <button
            className="w-full rounded-lg p-2 mt-4 hover:bg-red-600 hover:text-white bg-blue-500"
            onClick={removeData}
          >
            Remove All
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ToDoList;
