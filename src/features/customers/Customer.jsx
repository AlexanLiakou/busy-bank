import { useSelector } from "react-redux";

const Customer = () => {
  const customer = useSelector(store => store.customer.fullName);
  return (
    <h2 className="hidden sm:block text-white mb-8 text-2xl font-bold !mt-15">👋 Welcome, {customer !== '' ? customer : '' }</h2>
  );
}

export default Customer;
