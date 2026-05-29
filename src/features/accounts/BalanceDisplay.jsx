import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = () => {
  const account = useSelector((store) => store.account);
  console.log(account.balance);
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-24 p-2 sm:top-10 sm:left-auto sm:translate-x-0 sm:right-10 bg-gray-400 text-white font-bold sm:p-5 text-lg rounded">{formatCurrency(account.balance)}</div>
  ); 
}

export default BalanceDisplay;
