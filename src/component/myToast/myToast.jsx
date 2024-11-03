import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const MyToast = ({text}) => {
  const [Change, setChange] = useState(false);
  const notify = () => toast.success(text);
  useEffect(() => {
    setChange(true)
  }, []);

  Change && notify();


  return (
    <div className="text-3xl font-bold underline">
      <Toaster position="top-right" reverseOrder={false} />{" "}
    </div>
  );
};

export default MyToast;
