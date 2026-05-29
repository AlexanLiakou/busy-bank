import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

const Customer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const nameRegex = /[^a-zA-Z\s-]/g;

 const handleClick = () => {
  if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="!mt-20 flex flex-col items-center">
      <h2 className="text-white mb-8 text-2xl font-bold">Create new customer</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-white font-bold sm:w-100">Customer full name:</label>
          <input
            className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:italic"
            value={fullName}
            placeholder="i.e. John"
            onChange={(e) => {
              setError(nameRegex.test(e.target.value));
              setFullName(e.target.value);
            }
          } 
          />
          {error != "" && <p className="text-red-500 text-sm font-bold italic">Please use only letters, whitespace or '-'</p>}
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white font-bold sm:w-100">National ID:</label>
          <input
            className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:italic"
            value={nationalId}
            placeholder="i.e. 1A25"
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75 disabled:opacity-25" disabled={fullName  === '' || nationalId  === '' || error} onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
