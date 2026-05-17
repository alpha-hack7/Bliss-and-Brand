import "./css/orders.css";
import { Link } from "react-router";
import Pagination from "../../../components/Dashboard/Client/Pagination";

const Orders = () => {
  const orders = [
    {
      id: 1,
      order_index: "AB001",
      order_title: "order for office chairs",
      date_received: "12 May 2026",
    },
    {
      id: 2,
      order_index: "AB002",
      order_title: "order for office tables",
      date_received: "14 May 2026",
    },
  ];
  return (
    <div className="orders">
      <h2>Orders</h2>
      <div className="order">
        <table>
          <caption>
            <em>Click on the order index to see the order in full view</em>
          </caption>
          <thead>
            <th>Item No</th>
            <th>Order Index</th>
            <th>Order Title</th>
            <th>Date Received</th>
            <span></span>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="order-item" key={order.id}>
                <td>{order.id}</td>
                <td>
                  <Link to="/dashboard/client/orders/">
                    {order.order_index}
                  </Link>
                </td>
                <td>{order.order_title}</td>
                <td>{order.date_received}</td>
              </tr>
            ))}
          </tbody>
          <Pagination page_no={1} total_pages={6} />
        </table>
      </div>
    </div>
  );
};

export default Orders;
