import "./css/signup.css";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="signup">
      <h1>Hello,</h1>
      <h1> Glad you're joining us!</h1>
      <form action="" className="signup-form">
        <div className="signup-info">
          <input type="text" placeholder="Username / Email" />

          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="role-signup">
            <label htmlFor="client">
              <input type="radio" name="role" id="client" />
              Client
            </label>
            <label htmlFor="supplier">
              <input type="radio" name="role" id="supplier" />
              Supplier
            </label>
          </div>
        </div>
        <div className="buttons">
          <button>Back</button>
          <button type="submit">Sign Up</button>
        </div>
        <p>Already have an account,</p>
        <Link to="/login"> Login</Link>
      </form>
    </div>
  );
};

export default Signup;
