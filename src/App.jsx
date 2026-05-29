import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/CreateCustomer"
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

const App = () => {

  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div>
      <h1 className="text-white font-bold !m-0"><span className="hidden sm:inline">🏦</span> BusyBank</h1>
      {
        fullName ==='' ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )
      }
    </div>
  );
}

export default App;
