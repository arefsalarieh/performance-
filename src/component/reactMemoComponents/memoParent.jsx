import React, { useState } from "react";
import MemoUser from "../testComponent/withMemo/memoUser";
import MemoBook from "../testComponent/withMemo/memoBook";

const MemoParent = () => {
  const [UserAge, setUserAge] = useState(20);
  const [BookCost, setBookCost] = useState(200000);

  return (
    <div>
      <h1 className="font-bold text-xl text-center mt-10">
        simple component with two children with memoization
      </h1>
      <p className="px-32 text-center mt-2">
        On this page you can see the new behavior of two child components. that
        both child components are memoized and rerendered only when their props
        change.
      </p>

      <div className="bg-slate-300 w-1/3 h-72 mx-auto mt-10 border p-4">
        <MemoUser UserAge={UserAge} setUserAge={setUserAge} />
        <MemoBook BookCost={BookCost} setBookCost={setBookCost} />
      </div>
    </div>
  );
};

export default MemoParent;
