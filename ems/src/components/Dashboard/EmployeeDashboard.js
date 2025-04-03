import React from 'react'
import Header from '../others/Header'
import TaskNumberList from '../others/TaskNumberList'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskNumberList data = {props.data} />
      <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard
