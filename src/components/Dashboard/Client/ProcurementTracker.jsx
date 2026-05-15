export const ProcurementTracker = () => {
  const procurements = [
    {
      id: 1,
      item: "",
      status: "",
    },
  ];
  return (
    <div className="procurement-tracker">
      <h2>Procurement Tracker</h2>
      {procurements.map((procurement) => (
        <div className="procurement">
          <div>{procurement.item}</div>
          <div>{procurement.status}</div>
        </div>
      ))}
    </div>
  );
};
