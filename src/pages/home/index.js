import "./index.css";

const Home = () => {
  const handleClick = (arg) => {
    if (arg === "about") {
      window.location.href = "/about";
    } else {
      window.location.href = "./contact";
    }
  };

  return (
    <div className="home-page-wrpr">
      <div className="heading">Hi, this is the home page !!</div>
      <img
        src={
          "https://homepageonline.co.uk/wp-content/uploads/2018/11/click-homepage-online-estate-agents-ni-limavady-derry-londonderry-property-sales-logo-850x264.jpg"
        }
        alt="home-img"
      />
      <div className="buttons">
        <button
          className="nav-button"
          onClick={() => {
            handleClick("about");
          }}
        >
          Go to About page
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

export { Home };
