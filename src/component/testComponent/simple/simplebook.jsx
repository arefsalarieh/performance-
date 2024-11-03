import React from "react";
import MyToast from "../../myToast/myToast";

const Simplebook = ({BookCost , setBookCost}) => {
  return (
    <div className='bg-white shadow-2xl'>
      <div className='flex justify-center gap-5 mt-10'>
        <h2>book cost is : </h2>
        <h2>{BookCost}</h2>
      </div>
      <button onClick={()=>setBookCost(BookCost+10000)} className="bg-blue-400 w-fit mx-auto p-2 rounded-xl text-center block mt-3">increase</button>
      <MyToast text='Simplebook rendered'/>
    </div>
  );
};

export default Simplebook;
