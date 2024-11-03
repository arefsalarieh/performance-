import React, { useState } from "react";
import SimpleUser from "../testComponent/simple/simpleUser";
import Simplebook from "../testComponent/simple/simplebook";
import MemoBook from "../testComponent/withMemo/memoBook";
import MemoUser from "../testComponent/withMemo/memoUser";

const NotUseCallbackParent = () => {
  const [UserAge, setUserAge] = useState(20);
  const [BookCost, setBookCost] = useState(200000);

  const handleUserAge = () =>{
    setUserAge(UserAge + 1)
  }

  const handleBookCost = () =>{
    setBookCost(BookCost + 10000)
  }

  return (
    <div>
      <h1 className="font-bold text-xl text-center mt-10">
        simple parent with two children with memoization that parent send two
        different functions to each child without using useCallback for functions
      </h1>
      <p className="px-32 text-center mt-2">
        On this page, you can see the normal behavior of two child components,
        because of rerendering of the parent, the internal functions that sent as
        props are rebuilt and the child components are also rerendered.
      </p>

      <div className="bg-slate-300 w-1/3 h-72 mx-auto mt-10 border p-4">
        <MemoUser UserAge={UserAge} setUserAge={handleUserAge} />
        <MemoBook BookCost={BookCost} setBookCost={handleBookCost} />
      </div>
    </div>
  );
};

export default NotUseCallbackParent;
