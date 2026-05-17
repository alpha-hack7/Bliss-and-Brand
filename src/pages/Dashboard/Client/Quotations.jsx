import Pagination from "../../../components/Dashboard/Client/Pagination";
import "./css/quotations.css";
import { Link } from "react-router";
const Quotations = () => {
  const quotations = [
    {
      id: 1,
      quote_index: "AB001",
      quote_title: "Quote for office chairs",
      date_received: "12 May 2026",
    },
    {
      id: 2,
      quote_index: "AB002",
      quote_title: "Quote for office tables",
      date_received: "14 May 2026",
    },
  ];
  return (
    <div className="quotations">
      <h2>Quotations</h2>
      <div className="quote">
        <table>
          <caption>
            <em>Click on the quote index to see the quote in full view</em>
          </caption>
          <thead>
            <th>Item No</th>
            <th>Quote Index</th>
            <th>Quote Title</th>
            <th>Date Received</th>
            <span></span>
          </thead>
          <tbody>
            {quotations.map((quotation) => (
              <tr className="quote-item" key={quotation.id}>
                <td>{quotation.id}</td>
                <td>
                  <Link to="/dashboard/client/quotations/">
                    {quotation.quote_index}
                  </Link>
                </td>
                <td>{quotation.quote_title}</td>
                <td>{quotation.date_received}</td>
              </tr>
            ))}
          </tbody>
          <Pagination page_no={5} total_pages={9} />
        </table>
      </div>
    </div>
  );
};

export default Quotations;
