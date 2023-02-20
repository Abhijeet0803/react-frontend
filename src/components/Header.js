import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex justify-between bg-gray-700 p-2 h-14 shadow-lg text-white'>
        <h1 className="text-bold text-3xl">Pocket HR</h1>
        <div className='flex'>
          <h2 className="text-bold text-xl p-1"><Link to={"/form"}>Add Employee</Link></h2>
          <h2 className="text-bold text-xl p-1"><Link to={"/"}>View Employees</Link></h2>
        </div>
    </div>
  )
}

export default Header