export const ProcurementTracker = () => {
  const procurements = [
    {
      id: 1,
      item: "Chairs",
      status: "Delivered",
    },
  ];
  return (
    <div className="procurement-tracker">
      <h2>Procurement Tracker</h2>
      <div className="procurement-table">
        <table>
          <thead>
            <th>Item</th>
            <th>Status</th>
          </thead>
          <tbody>
            {procurements.map((procurement) => (
              <tr key={procurement.id}>
                <td>{procurement.item}</td>
                <td>{procurement.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
