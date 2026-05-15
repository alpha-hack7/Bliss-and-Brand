import "./css/request-quote.css";
import { BackArrow } from "../../components/general/Navbar";

const RequestQuote = () => {
  return (
    <div className="request-quote">
      <BackArrow />
      <h1>Request Quote</h1>
      <form action="">
        <div className="request-info">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="item description" id=""></textarea>
          <textarea placeholder="item specifications" id=""></textarea>
        </div>
        <input type="file" name="" id="" />
        <div className="urgency">
          <label htmlFor="1">
            <input type="radio" name="urgency" id="1" />
            High
          </label>
          <label htmlFor="2">
            <input type="radio" name="urgency" id="2" />
            Medium
          </label>
          <label htmlFor="3">
            <input type="radio" name="urgency" id="3" />
            Low
          </label>
        </div>
        <label htmlFor="deadline">
          Deadline
          <input type="date" name="" id="deadline" />
        </label>
        <section className="budget-range">
          Budget range
          <div>
            <label htmlFor="min">
              Min
              <input type="number" name="" id="min" />
            </label>
            <label htmlFor="max">
              Max
              <input type="number" name="" id="max" />
            </label>
          </div>
        </section>
        <div className="buttons">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote;
