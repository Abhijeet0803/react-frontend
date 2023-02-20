import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from './Row'

const Table = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
    loadEmployees();

  },[]);

  const loadEmployees = async () =>{

      const employeesData = await axios.get("http://localhost:8080/api/v1/employees");
      console.log(employeesData.data);
      setEmployees(employeesData.data);
  }

  const updateEmployees = (id) =>{
      setEmployees(employees.filter(e => e.id !== id));
  }

  return (
    <div className="flex flex-col text-center mb-8">
  <div className="overflow-x-auto sm:-mx-6 lg:mx-8 border">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="border-b text-center">
            <tr>
              <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4">
                EmpId
              </th>
              <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4">
                First Name
              </th>
              <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4">
                Last Name
              </th>
              <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4">
                Email
              </th>
              <th scope="col" className="text-lg font-semibold  text-gray-900 px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((emp) => <Row {...emp} key={emp.id} update={updateEmployees}/>)
            }
 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Table