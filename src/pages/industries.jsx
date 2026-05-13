import Navbar from "../components/general/Navbar";
import "./css/industries.css";

const Sectors = () => {
  const sectors = [
    {
      id: 1,
      title: "",
      description: "",
      image: "",
    },
  ];
  return (
    <div className="sectors">
      {sectors.map((sector) => (
        <Sector key={sector.id} {...sectors} />
      ))}
    </div>
  );
};

const Sector = ({ image, description, title }) => {
  return (
    <div className="sector">
      <div className="sector-image">
        <img src={image} alt={title} />
      </div>
      <div className="sector-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Industries = () => {
  return (
    <div>
      <Navbar />
      <h1>Who We Serve</h1>
      <p>
        Bliss & Brand Ltd partners with organizations across multiple sectors,
        delivering reliable procurement solutions tailored to each industry's
        unique needs.
      </p>
      <Sectors />
    </div>
  );
};

export default Industries;
