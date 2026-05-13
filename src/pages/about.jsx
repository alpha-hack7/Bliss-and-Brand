import Navbar from "../components/general/Navbar";
import "./css/about.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <h1>About Us</h1>
      <section>
        <p>
          Bliss & Brand Ltd is a general procurement and supply company helping
          businesses source quality products efficiently, reliably and
          cost-effectively.
        </p>
      </section>
      <section className="missions-container">
        <div>
          <h3>Mission</h3>
          <p>
            To provide dependable procurement solutions that help businesses
            operate smoothly.
          </p>
        </div>
        <div>
          <h3>Vision</h3>
        </div>
        <div>
          <h3>Values</h3>
        </div>
      </section>
      <section>
        <h2>What We Do</h2>
        <WhatWeDo />
      </section>
      <section>
        <h2>Why Choose Bliss & Brand Ltd</h2>
        <p>
          At Bliss & Brand, we prioritize quality assurance, supplier
          reliability and efficient delivery processes to ensure our clients
          experience smooth, dependable procurement.
        </p>
      </section>
      <section>
        <h2>What Our Company Offers</h2>
        <p>
          We simplify procurement so businesses can focus on growth instead of
          supplier management.
        </p>
        <ul>
          <li>Saves time</li>
          <li>Saves cost</li>
          <li>Reduces sourcing risks</li>
          <li>Access to reliable suppliers</li>
          <li>Quality assurance</li>
        </ul>
      </section>
    </div>
  );
};
const WhatWeDo = () => {
  const whatwedo = [
    {
      id: 1,
      title: "Bulk Purchasing",
      description:
        "We facilitate bulk purchasing solutions that help clients optimize costs and maintain steady supply levels.",
    },
    {
      id: 2,
      title: "Custom Business Orders",
      description:
        "We handle custom procurement requests tailored to meet unique operational and organizational needs.",
    },
    {
      id: 3,
      title: "Supplier Negotiations",
      description:
        "We manage supplier negotiations to secure competitive pricing, favorable terms, and consistent product quality.",
    },
    {
      id: 4,
      title: "Product Sourcing",
      description:
        "We identify and source quality products from reliable suppliers based on our clients specific requirements.",
    },
    {
      id: 5,
      title: "Delivery Coordination",
      description:
        "We coordinate logistics and delivery processes to ensure timely, efficient and reliable order fulfillment.",
    },
  ];
  return (
    <section className="what-we-do-container">
      {whatwedo.map((whatWeDo) => (
        <div className="what-we-do" key={whatWeDo.id}>
          <h3>{whatWeDo.title}</h3>
          <p>{whatWeDo.description}</p>
        </div>
      ))}
    </section>
  );
};

export default About;
