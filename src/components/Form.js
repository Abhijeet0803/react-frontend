import axios from 'axios';
import React from 'react'
import {useState} from 'react';

const Form = () => {

  const [newEmp, setNewEmp] = useState({});
  //const [counter, setCounter] =useState(0);

  const handleForm = (e) =>{
    console.log(newEmp);  
    postDataToServer(newEmp);
    setNewEmp({});
    e.preventDefault();
  }

  const postDataToServer = async (data) =>{
      await axios.post("http://localhost:8080/api/v1/employees", data);
      console.log("success");
  }

  return (
    <div className='my-10'>
    <div className=' w-[40%] m-auto border-2 rounded-lg border-gray-300 '>
        <h1 className='text-center py-4 mb-2 font-medium text-2xl border-b-2'>Enter/Edit Employee Details</h1>
        <form className='flex flex-col px-8' onSubmit={handleForm}>
            <label className='text-lg font-semibold my-1'>First Name:</label>
            <input className='border border-gray-300 my-1 outline-0 px-3 py-1 rounded-md' type={"text"} onChange={(e)=>{
              setNewEmp({...newEmp, firstname: e.target.value})
            }}></input>
            <label className='text-lg font-semibold my-1'>Last Name:</label>
            <input className='border border-gray-300 my-1 outline-0 px-3 py-1 rounded-md' type={"text"} onChange={(e)=>{
              setNewEmp({...newEmp, lastname:e.target.value})
            }} ></input>
            <label className='text-lg font-semibold my-1'>Email:</label>
            <input className='border border-gray-300 my-1 outline-0 px-3 py-1 rounded-md' type={"text"} onChange={(e)=>{
              setNewEmp({...newEmp, email:e.target.value})
            }} ></input>
            <div className='flex justify-around my-4'>
            <button className='px-3 py-1 m-2 bg-green-500 rounded-md text-white' type={"submit"}>Save</button>
            <button className='px-2 py-1 m-2 bg-red-500 rounded-md text-white' type={"button"}>Clear</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form