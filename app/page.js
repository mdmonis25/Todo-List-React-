"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  };

  let renderTask = <h1>No Task Available</h1>;
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
      <li key={i} className="flex items-center m-8 
      justify-between">
        <div className="flex items-center justify-between w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className="bg-red-500 text-white px-4 py-2 rounded font-medium">
        Delete
        </button>
      </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl text-center p-5 font-bold">
        Todo List <span>by Monis</span>
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="m-5 px-4 py-2 border-zinc-800 border-4 text-2xl"
          placeholder="Enter Task Name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="m-5 px-4 py-2 border-zinc-800 border-4 text-2xl"
          placeholder="Enter Task Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="rounded px-4 py-3 bg-black text-white m-5 text-2xl">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
