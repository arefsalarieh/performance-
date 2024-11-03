import React from 'react'
import MyToast from '../../myToast/myToast'

const SimpleUser = ({UserAge , setUserAge}) => {
  
  return (
    <div className='bg-white shadow-2xl'>
      <div className='flex justify-center gap-5 mt-10'>
        <h2>user age is : </h2>
        <h2>{UserAge}</h2>
      </div>
      <button onClick={()=>setUserAge(UserAge+1)} className="bg-blue-400 w-fit mx-auto p-2 rounded-xl text-center block mt-3">increase</button>
      <MyToast text='SimpleUser rendered'/>
    </div>
  )
}

export default SimpleUser