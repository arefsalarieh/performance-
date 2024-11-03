import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  
  return (
    <div className='flex gap-5 mt-10 w-[90%] mx-auto'>
        <NavLink to='/' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>Memo</NavLink>
        <NavLink to='/UseCallbackPaige' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>UseCallback</NavLink>
        <NavLink to='/UseMemoPage' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>UseMemo</NavLink>
    </div>
  )
}

export default Header