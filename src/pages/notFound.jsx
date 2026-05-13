import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>Looks like you wandered off</h1>
      <h2>Let's get you back</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default NotFound;
