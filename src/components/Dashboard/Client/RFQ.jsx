import { useNavigate } from "react-router";

export const RFQ = () => {
  const navigate = useNavigate();
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
      {requests.length > 0 ? (
        <div className="rfq-table">
          <table>
            <thead>
              <th>Item</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Date Created</th>
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
      ) : (
        <div>You haven't requested for a quotation yet!</div>
      )}
      <button
        className="new-RFQ"
        onClick={() => navigate("/dashboard/client/request-quote")}
      >
        + New RFQ
      </button>
    </div>
  );
};
