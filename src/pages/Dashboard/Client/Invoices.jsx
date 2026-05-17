import Pagination from "../../../components/Dashboard/Client/Pagination";
import "./css/invoices.css";
import { Link } from "react-router";
const Invoices = () => {
  const invoices = [
    {
      id: 1,
      invoice_index: "AB001",
      invoice_title: "Invoice for office chairs",
      date_received: "12 May 2026",
    },
    {
      id: 2,
      invoice_index: "AB002",
      invoice_title: "Invoice for office tables",
      date_received: "14 May 2026",
    },
  ];
  return (
    <div className="invoices">
      <h2>Invoices</h2>
      <div className="invoice">
        <table>
          <caption>
            <em>Click on the invoice index to see the invoice in full view</em>
          </caption>
          <thead>
            <th>Item No</th>
            <th>Invoice Index</th>
            <th>Invoice Title</th>
            <th>Date Received</th>
            <span></span>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr className="invoice-item" key={invoice.id}>
                <td>{invoice.id}</td>
                <td>
                  <Link to="/dashboard/client/invoices/">
                    {invoice.invoice_index}
                  </Link>
                </td>
                <td>{invoice.invoice_title}</td>
                <td>{invoice.date_received}</td>
              </tr>
            ))}
          </tbody>
          <Pagination page_no={2} total_pages={13} />
        </table>
      </div>
    </div>
  );
};

export default Invoices;
