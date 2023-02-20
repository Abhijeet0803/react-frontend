import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const Row = ({id, firstname, email, lastname, update}) => {

  const handleDelete = async (id) =>{
    console.log("delete "+ id);
    await axios.delete("http://localhost:8080/api/v1/employees/"+id);
    update(id);
  }


  return (
    <>
        <tr className="border-b">
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {id}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {firstname}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {lastname}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button className='p-2 m-2 bg-sky-400 rounded-lg text-white'><Link to={"/form/"+id}>Update</Link></button>
                <button className='p-2 m-2 bg-red-400 rounded-lg text-white' onClick={()=>{handleDelete(id)}} type={"button"}>Delete</button>
                <button className='p-2 m-2 bg-green-400 rounded-lg text-white'>View</button>
              </td>
        </tr>
    </>
  )
}

export default Row