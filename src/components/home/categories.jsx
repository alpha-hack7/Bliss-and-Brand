import "./css/categories.css";
import HomeImage from "../../assets/home/categories/Home.png";
import FashionImage from "../../assets/home/categories/Fashion.png";
import BeautyImage from "../../assets/home/categories/Beauty.png";
import ElectronicsImage from "../../assets/home/categories/Electronics.png";
import SportsImage from "../../assets/home/categories/Sports.png";
import { FiChevronRight } from "react-icons/fi";

const AllCategories = () => {
  const categories = [
    {
      id: 1,
      imgSrc: HomeImage,
      title: "Home & Living",
    },
    {
      id: 2,
      imgSrc: FashionImage,
      title: "Fashion",
    },
    {
      id: 3,
      imgSrc: BeautyImage,
      title: "Beauty",
    },
    {
      id: 4,
      imgSrc: ElectronicsImage,
      title: "Electronics",
    },
    {
      id: 5,
      imgSrc: SportsImage,
      title: "Sports",
    },
  ];
  return (
    <div className="categories-container">
      <div className="all-categories">
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
      <button className="cat-button">
        <FiChevronRight size={25} />
      </button>
    </div>
  );
};
const Category = ({ imgSrc, title }) => {
  return (
    <div className="category">
      <div className="cat-image">
        <img src={imgSrc} alt={title} width={200} height={150} />
      </div>
      <p>{title}</p>
    </div>
  );
};
const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <AllCategories />

      <div className="right-arrow"></div>
    </div>
  );
};

export default Categories;
