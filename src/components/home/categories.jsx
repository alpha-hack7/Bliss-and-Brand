import "./css/categories.css";
import HomeImage from "../../assets/home/categories/Home.png";
import FashionImage from "../../assets/home/categories/Fashion.png";
import BeautyImage from "../../assets/home/categories/Beauty.png";
import ElectronicsImage from "../../assets/home/categories/Electronics.png";
import SportsImage from "../../assets/home/categories/Sports.png";

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
    </div>
  );
};
const Category = ({ imgSrc, title }) => {
  return (
    <div className="category">
      <div className="cat-image">
        <img src={imgSrc} alt={title} width={200} height={150} />
      </div>
    </div>
  );
};
const Categories = () => {
  return (
    <>
      <h2>Categories</h2>
      <div className="categories-container">
        <AllCategories />
      </div>
      <div className="right-arrow"></div>
    </>
  );
};

export default Categories;
