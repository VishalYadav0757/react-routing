import "./index.css";

const About = () => {
  const handleClick = (arg) => {
    if (arg === "home") {
      window.location.href = "/";
    } else {
      window.location.href = "./contact";
    }
  };

  return (
    <div className="about-page-wrpr">
      <div className="heading">Welcome to the about page !!</div>
      <img
        src={"https://vidwan.inflibnet.ac.in/files/slider/slider4.jpg"}
        alt="about-img"
        className="about-img"
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
            handleClick("contact");
          }}
        >
          Go to Contact page
        </button>
      </div>
    </div>
  );
};

export { About };
