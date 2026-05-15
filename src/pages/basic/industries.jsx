import Navbar from "../../components/general/Navbar";
import "./css/industries.css";
import HomeImage from "../../assets/home/categories/Home.png";
import FashionImage from "../../assets/home/categories/Fashion.png";
import BeautyImage from "../../assets/home/categories/Beauty.png";
import ElectronicsImage from "../../assets/home/categories/Electronics.png";
import SportsImage from "../../assets/home/categories/Sports.png";

const Sectors = () => {
  const sectors = [
    {
      id: 1,
      title: "Manufacturing",
      description: "Manufacturing industries are very nice. oh my soul, ",
      image: HomeImage,
    },
    {
      id: 2,
      title: "Manufacturing",
      description: "Manufacturing industries are very nice. oh my soul, ",
      image: FashionImage,
    },
    {
      id: 3,
      title: "Manufacturing",
      description: "Manufacturing industries are very nice. oh my soul, ",
      image: BeautyImage,
    },
    {
      id: 4,
      title: "Manufacturing",
      description: "Manufacturing industries are very nice. oh my soul, ",
      image: ElectronicsImage,
    },
    {
      id: 5,
      title: "Manufacturing",
      description: "Manufacturing industries are very nice. oh my soul, ",
      image: SportsImage,
    },
  ];
  return (
    <div className="sectors">
      <h2>Some of the Industries</h2>
      {sectors.map((sector) => (
        <Sector key={sector.id} {...sector} />
      ))}
    </div>
  );
};

const Sector = ({ id, image, description, title }) => {
  const s_image = (
    <div className="sector-image">
      <img src={image} alt={title} />
    </div>
  );
  const s_content = (
    <div className="sector-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
  return (
    <div className="sector">
      {id % 2 == 1 ? (
        <div className="sector-info">
          <div>{s_image}</div>
          <div>{s_content}</div>
        </div>
      ) : (
        <div className="sector-info">
          <div>{s_content}</div>
          <div>{s_image}</div>
        </div>
      )}
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
