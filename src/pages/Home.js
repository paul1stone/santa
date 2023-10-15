import "../styles/Home.css";
import Button from "../components/Button";

function Home() {
  return (
    <div className="main-holder">
      <p className="cool-font">SECRET SANTA</p>
      <div className="button-holder">
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Home;
