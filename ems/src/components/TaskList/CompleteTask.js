import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold '>{data.titile}</h2>
    <p className='text-sm mt-4'>{data.description}
    </p>
    <div className='mt-2'>
    <button className='bg-green-600 text-white px-4 py-2 rounded-md'>Complete</button>
    </div>
</div>
  )
}

export default CompleteTask
