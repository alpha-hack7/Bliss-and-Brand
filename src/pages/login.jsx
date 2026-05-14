import "./css/login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <h1>Hi, Welcome back!</h1>
      <form action="" className="login-form">
        <div className="login-info">
          <input type="text" placeholder="Username / Email" />
          <input type="password" placeholder="Password" />
        </div>
        <Link className="forgot-password">Forgot Password</Link>
        <div className="buttons">
          <button onClick={() => navigate(-1)}>Back</button>
          <button type="submit">Sign In</button>
        </div>
        <p>Don't have an account, </p>
        <Link to="/signup"> create account</Link>
      </form>
    </div>
  );
};

export default Login;
