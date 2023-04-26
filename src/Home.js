import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <>
      <p className="intro">
        Image Match lets you compare an old photo with a new one taken on your
        device. With two windows side by side.
      </p>

      <Link to="/capture" className="try-link">Try</Link>

      <p className="intro">
        you can easily see how things have changed over time and capture new
        memories.
      </p>

    </>
  );
}

export default Home;
