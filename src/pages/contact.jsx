import Navbar from "../components/general/Navbar";
import "./css/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <h1>Contact Us</h1>
      <p>For any enquiries, clarification or opportunity to partner,</p>
      <p>reach out to us via:</p>
      <p>
        Tel: <i>+2547 1234 5678</i>
      </p>
      <p>
        Email: <i>blissandbrand@gmail.com</i>
      </p>
      <section>
        <h2>Message us:</h2>
        <form action="" className="contact-form">
          <input type="text" id="name" placeholder="Name" />
          <input type="email" id="email" placeholder="Email" />
          <input type="text" id="Subject" placeholder="Subject(Optional)" />
          <div>
            <label htmlFor="Message">Message</label>
            <textarea id="Message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
