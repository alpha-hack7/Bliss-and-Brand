import { Overview_Cards } from "../../../components/Dashboard/Client/Overview_cards";
import { RFQ } from "../../../components/Dashboard/Client/RFQ";
import { ProcurementTracker } from "../../../components/Dashboard/Client/ProcurementTracker";

const C_Dashboard = () => {
  const user = "Alpha";
  return (
    <div>
      <h2>Welcome Back, {user}</h2>
      <Overview_Cards />
      <RFQ />
      <ProcurementTracker />
    </div>
  );
};

export default C_Dashboard;
