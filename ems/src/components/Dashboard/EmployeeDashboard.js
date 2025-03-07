import React from 'react'
import Header from '../others/Header'
import TaskNumberList from '../others/TaskNumberList'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      <Header />
      <TaskNumberList />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
