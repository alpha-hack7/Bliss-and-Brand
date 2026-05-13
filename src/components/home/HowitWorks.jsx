import "./css/how.css";
import File from "../../assets/home/howItWorks/file.png";
import Search from "../../assets/home/howItWorks/search.png";
import Right from "../../assets/home/howItWorks/right.png";
import Deliver from "../../assets/home/howItWorks/deliver.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: File,
      title: "Submit your Request",
      content: "Tell us what you need, and we'll get started immediately",
    },
    {
      id: 2,
      image: Right,
      title: "We Source the Best Options",
      content: "We find trusted suppliers and competitive prices for you",
    },
    {
      id: 3,
      image: Search,
      title: "Review and Approve",
      content: "You receive a detailed quote and approve before we proceed",
    },
    {
      id: 4,
      image: Deliver,
      title: "We deliver",
      content: "We handle procurement and logistics straight to your doorstep",
    },
  ];
  return (
    <>
      <h2>How it Works</h2>
      <div className="steps">
        {steps.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </div>
    </>
  );
};

const Step = ({ image, title, content }) => {
  return (
    <div className="step">
      <div className="step-image">
        <img src={image} alt={title} />
      </div>
      <h3>
        <strong>{title}</strong>
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default HowItWorks;
