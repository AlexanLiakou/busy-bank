import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

const Customer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

 const handleClick = () => {
  if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="!mt-15 flex flex-col items-center">
      <h2 className="text-white mb-8 text-2xl font-bold">Create new customer</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-white font-bold sm:w-100">Customer full name:</label>
          <input
          className="border p-2 font-normal text-white border-white rounded-md outline-0"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white font-bold sm:w-100">National ID:</label>
          <input
            className="border p-2 font-normal text-white border-white rounded-md outline-0"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75" disabled={fullName  === '' || nationalId  === ''} onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
