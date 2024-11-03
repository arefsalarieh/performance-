import React, { useState } from "react";
import MemoUser from "../testComponent/withMemo/memoUser";
import MemoBook from "../testComponent/withMemo/memoBook";

const NotUseMemoParent = () => {
  const [UserAge, setUserAge] = useState(20);
  const [BookCost, setBookCost] = useState(200000);

  const calculate = () => {
    let i = 0 ;
    while (i<250000000) i++
    return UserAge % 2 === 0
  }

  return (
    <div>
      <h1 className="font-bold text-xl text-center mt-10 p-4">
        simple parent with two children with memoization that parent has a
        function that Calculate a mathematical operation and retun somthing ,and
        we use that in jsx. when
      </h1>
      <p className="px-32 text-center mt-2">
        On this page, you can see the normal behavior of a component as parent
        that when we change its state the function in this component that retun
        somthing build again.
      </p>

      <div className="bg-slate-300 w-1/3  mx-auto mt-10 border p-4">
        <div className="bg-gray-200 text-center h-32 p-2">
          <h1 className="bg-gray-400 text-white">the age is : {calculate() ? 'even' : 'odd'}</h1>
          <p className="text-sm">when we change age this value must be chage and the function operation take some time, but when we change book cost the function should not work.</p>
        </div>
        <MemoUser UserAge={UserAge} setUserAge={setUserAge} />
        <MemoBook BookCost={BookCost} setBookCost={setBookCost} />
        <p>we have delay when we change book cost because of unnecessary function rerender </p>
      </div>
    </div>
  );
};

export default NotUseMemoParent;
