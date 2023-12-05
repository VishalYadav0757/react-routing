import "./index.css";

const Contact = () => {
  const handleClick = (arg) => {
    if (arg === "home") {
      window.location.href = "/";
    } else {
      window.location.href = "./about";
    }
  };

  return (
    <div className="contact-page-wrpr">
      <div className="heading">This is the contact page !!</div>
      <img
        src={
          "https://www.axisbank.com/images/default-source/revamp_new/contact-us/contactus.jpg"
        }
        alt="contact-img"
        className="contact-img"
      />
      <div className="buttons">
        <button
          className="nav-button"
          onClick={() => {
            handleClick("home");
          }}
        >
          Go to Home page
        </button>
        <button
          className="nav-button"
          onClick={() => {
            handleClick("about");
          }}
        >
          Go to About page
        </button>
      </div>
    </div>
  );
};

export { Contact };
