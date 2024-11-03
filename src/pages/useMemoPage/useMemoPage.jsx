import React, { useState } from 'react'
import Sidebar from '../../component/sideBar/Sidebar';
import NotUseMemoParent from '../../component/useMemoComponent/notUseMemoParent';
import UseMemoParent from '../../component/useMemoComponent/useMemoParent';

const UseMemoPage = () => {
    const [Count, setCount] = useState(1);
  return (
    <div className='  border-2 border-t min-h-[640px] bg-green-100'>
    <div className='flex min-h-[500px] w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
        <div className='w-[20%] bg-[#01CEC9]'>
            <Sidebar setCount={setCount} Count={Count} first='Simple components' second='With useMemo'/>
        </div>
        <div  className='w-[80%] border bg-gray-100 pb-20'>
            {Count === 1 && <NotUseMemoParent/>}
            {Count === 2 && <UseMemoParent/>}
        </div>
    </div> 
</div>
  )
}

export default UseMemoPage