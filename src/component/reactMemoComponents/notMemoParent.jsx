import React, { useState } from "react";
import SimpleUser from "../testComponent/simple/simpleUser";
import Simplebook from "../testComponent/simple/simplebook";


const NotMemoParent = () => {
  const [UserAge, setUserAge] = useState(20);
  const [BookCost, setBookCost] = useState(200000);
  return (
    <div>
      <h1 className="font-bold text-xl text-center mt-10">
        simple component with two children without memoization
      </h1>
      <p className="px-32 text-center mt-2">
        On this page, you can see the normal behavior of two child components,
        which both child components are rerendered with any change in the
        parent.
      </p>

      <div className="bg-slate-300 w-1/3 h-72 mx-auto mt-10 border p-4">
        <SimpleUser UserAge={UserAge} setUserAge={setUserAge} />
        <Simplebook BookCost={BookCost} setBookCost={setBookCost} />
      </div>
    </div>
  );
};

export default NotMemoParent;
