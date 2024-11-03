import React, { useCallback, useState } from "react";
import MemoUser from "../testComponent/withMemo/memoUser";
import MemoBook from "../testComponent/withMemo/memoBook";

const UseCallbackParent = () => {
  const [UserAge, setUserAge] = useState(20);
  const [BookCost, setBookCost] = useState(200000);

  const handleUserAge = useCallback(() =>{
    setUserAge(UserAge + 1)
  }, [UserAge])

  const handleBookCost = useCallback(() =>{
    setBookCost(BookCost + 10000)
  } , [BookCost])


  return (
    <div>
      <h1 className="font-bold text-xl text-center mt-10">
        parent with two children with memoization that parent send two
        different functions to each child with using useCallback for functions
      </h1>
      <p className="px-32 text-center mt-2">
        On this page, you can see the new behavior of two child components,
        because of rerendering of the parent, the internal functions that sent as
        props just rebuilt when the dependency changes and the child components dont rerender in every situation.
      </p>

      <div className="bg-slate-300 w-1/3 h-72 mx-auto mt-10 border p-4">
        <MemoUser UserAge={UserAge} setUserAge={handleUserAge} />
        <MemoBook BookCost={BookCost} setBookCost={handleBookCost} />
      </div>
    </div>
  );
};

export default UseCallbackParent;
