import { Fragment } from "react";
import Navbar from "../../components/general/Navbar";
import Categories from "../../components/home/categories";
import HowItWorks from "../../components/home/HowitWorks";
import "./css/home.css";
import { useNavigate } from "react-router";

const Slideshow = () => {
  const navigate = useNavigate();
  const sectors = [
    {
      id: 1,
      name: "Education",
    },
    {
      id: 2,
      name: "HealthCare",
    },
    {
      id: 3,
      name: "SMEs & Enterprises",
    },
    {
      id: 4,
      name: "Retail & WholeSale",
    },
    {
      id: 5,
      name: "Construction",
    },
    {
      id: 6,
      name: "Financial Institutions",
    },
  ];
  const slides = [
    {
      id: 1,
      content: (
        <div className="slide" id="1">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>
              <em>Your Procurement Partner for smart business operations</em>
            </h2>
            <p>
              We help businesses, organizations and institutions source quality
              products, manage suppliers and streamline purchasing -
              efficiently, transparently and on time.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: <div className="slide">I dont know what to put here</div>,
    },
    {
      id: 3,
      content: (
        <div className="slide" id="3">
          <h2>Industries / Sectors</h2>
          <div className="slide-sectors">
            {sectors.map((sector) => (
              <div className="slide-sector" key={sector.id}>
                {sector.name}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="slide" id="4">
          <h2>What makes us operationally strong</h2>
          <section>
            <div className="slide4-content">
              <p>
                At Bliss and Brand Ltd, we simplify procurement so you can focus
                on growing your business.
              </p>
              <p>
                From supplier sourcing to final delivery, we handle every step
                with precision, accountability and speed.
              </p>
            </div>
            <div className="slide4-image">
              <img src="" alt="" />
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="slide" id="5">
          <h2>What are you waiting for?</h2>
          <section>
            <div className="slide5-image">
              <img src="" alt="" />
            </div>
            <div className="slide5-content">
              <p>
                Start requesting quotes, compare suppliers, and make better
                purchasing decisions today.
              </p>
              <div className="slide5-buttons">
                <button onClick={() => navigate("/request-quote")}>
                  Request a quote
                </button>
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </section>
          <div></div>
        </div>
      ),
    },
  ];
  // const services = [
  //   {
  //     id: 1,
  //     title: "Request Quotes Easily",
  //     content:
  //       "Submit your requirements in minutes and reach multiple suppliers at once",
  //     support: "Get competitive quotes from multiple suppliers",
  //   },
  //   {
  //     id: 2,
  //     title: "Compare Offers Side-by-Side",
  //     content: "Evaluate pricing, timelines and terms in one place",
  //     support: "Save time with a streamlined sourcing process",
  //   },
  //   {
  //     id: 3,
  //     title: "Verified Suppliers",
  //     content: "Work only with trusted and vetted vendors",
  //     support: "",
  //   },
  //   {
  //     id: 4,
  //     title: "Faster Procurement",
  //     content:"Reduce delays and eliminate back-and-forth emails.",
  //     support: "Make confident decisions with transparent pricing"
  //   },
  // ];
  return (
    <div className="slideshow">
      {slides.map((slide) => (
        <Fragment key={slide.id}>
          <>{slide.content}</>
        </Fragment>
      ))}
      {/* <div className="slide" id="2">
        <h2>Our Services</h2>
        <div>
          {services.map((service) => (
            <div className="service" key={service.id}>
              <div>
                <div>
                  {service.title}
                </div>
                <div>
                  <p>{service.content}</p>
                  <p>{service.support}</p>
                </div>
              </div>
              <div></div>
            </div>
          ))}
          <div className="image check">{services[0]}</div>
          <p>
            Submit your requirements in minutes and reach multiple suppliers at
            once.
          </p>
          <p>Get competitive quotes from multiple suppliers</p>
        </div>
        div
      </div> */}

      {/* <Navigation /> */}
    </div>
  );
};
// const Navigation = () => {
//   return (
//     <>
//       <h1>Navigation</h1>
//     </>
//   );
// };

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="CTA">
      <h2>Smart Procurement Made Simple</h2>
      <p>
        Smart procurement for organizations of all sizes &mdash; cost-effective,
        efficient and uncompromising on quality.
      </p>
      <p>
        <i>Reliable Procurement. Seamless Supply. Trusted Delivery</i>
      </p>
      <button onClick={() => navigate("/request-quote")}>
        Request a quote
      </button>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Categories />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Home;
