import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deposit, withdraw, requestLoan, payLoan} from '../accounts/accountSlice';

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const account = useSelector((store) => store.account);
  const dispatch = useDispatch();

 const handleDeposit = () => {
  if(!depositAmount) return;
  dispatch(deposit(depositAmount, currency));
  setDepositAmount('');
 };

 const handleWithdrawal = () => {
  if(!withdrawalAmount) return;
  dispatch(withdraw(withdrawalAmount));
  setWithdrawalAmount('');
 };

 const handleRequestLoan = () => {
  if(!loanAmount || !loanPurpose) return;
  dispatch(requestLoan(loanAmount, loanPurpose));
  setLoanAmount('');
  setLoanPurpose('');
 };

 const handlePayLoan = () => {
  dispatch(payLoan());
 };

  return (
    <div className="mt-20 sm:mt-15 flex flex-col items-center">
      <h2 className="text-white mb-10 text-2xl font-bold">Your account operations</h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-white font-bold sm:w-100">Deposit:</label>
          <input
            className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:text-sm placeholder:italic"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            placeholder="i.e. 100"
          />
          <select
            className="border p-2 font-normal text-white border-white rounded-md outline-0 bg-blue-400"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option className="font-normal text-white" value="USD">US Dollar</option>
            <option className="font-normal text-white" value="EUR">Euro</option>
            <option className="font-normal text-white" value="GBP">British Pound</option>
          </select>
          <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75 disabled:opacity-25" disabled={depositAmount === '' || account.isLoading} onClick={handleDeposit}>{account.isLoading ? 'Converting...' : `Deposit ${depositAmount}`}</button>
        </div>
        {
          account.balance > 0 && (
          <div className="flex flex-col gap-4">
            <label className="text-white font-bold sm:w-100">Withdraw:</label>
            <input
              className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:text-sm placeholder:italic"
              type="number"
              value={withdrawalAmount}
              onChange={(e) => 
                setWithdrawalAmount(+e.target.value)
              }
              placeholder="i.e. 100"
            />
            <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75 disabled:opacity-25" disabled={withdrawalAmount === '' || withdrawalAmount > account.balance} onClick={handleWithdrawal}>
              Withdraw {withdrawalAmount}
            </button>
          </div>
          )
        }
        {
          !account.loan  && (
            <div className="flex flex-col gap-4">
              <label className="text-white font-bold sm:w-100">Request loan (amount/reason):</label>
              <input
                className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:text-sm placeholder:italic"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
                placeholder="i.e. 100"
              />
              <input
                className="border p-2 font-normal text-white border-white rounded-md outline-0 placeholder:text-sm placeholder:italic"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                placeholder="i.e. Buy a car"
              />
              <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75 disabled:opacity-25" disabled={loanAmount === '' || loanPurpose === ''} onClick={handleRequestLoan}>Request loan</button>
            </div>
          )
        }
        {
          account.loan > 0 && (
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold sm:w-100">Pay back {account.loan}$ ({account.loanPurpose})</p>
              <button className="rounded-md bg-gray-400 text-white font-bold p-3 cursor-pointer hover:opacity-75" onClick={handlePayLoan}>Pay loan</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default AccountOperations;
