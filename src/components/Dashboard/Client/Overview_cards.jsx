export const Overview_Cards = () => {
  const active_requests = 12;
  const pending_quotations = 33;
  const approved_orders = 12;
  const completed_procurements = 4;
  return (
    <div className="overview-cards">
      <div>
        <p>Active Requests</p>
        <h2>{active_requests}</h2>
      </div>
      <div>
        <p>Pending Quotations</p>
        <h2>{pending_quotations}</h2>
      </div>
      <div>
        <p>Approved Orders</p>
        <h2>{approved_orders}</h2>
      </div>
      <div>
        <p>Completed Procurements</p>
        <h2>{completed_procurements}</h2>
      </div>
    </div>
  );
};
