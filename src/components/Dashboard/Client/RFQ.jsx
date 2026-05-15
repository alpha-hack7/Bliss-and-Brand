export const RFQ = () => {
  const requests = [
    {
      id: 1,
      item: "Office Chairs",
      supplier: "FurniCo",
      status: "Pending",
      date_created: "May 12,2026",
    },
  ];
  return (
    <div className="RFQ">
      <h2>Requests For Quotations</h2>
      <div className="rfq-table">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr className="request" key={request.id}>
                <td>{request.item}</td>
                <td>{request.supplier}</td>
                <td>{request.status}</td>
                <td>{request.date_created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span className="new-RFQ">+ New RFQ</span>
    </div>
  );
};
