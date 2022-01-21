import { Link, useLocation } from "react-router-dom";
import mainImage from "./mainpageImage.png";

Home.defaultProps = {
  title: "EIKA's digital shopping list",
  introText:
    "Welcome to EIKA's shopping list. Here you will be able to create an item list for the furniture you want to buy. To get started press the 'Start Shopping List' button."
};

export function Home({ title, introText }) {
  return (
    <div>
      <img
        className="center"
        width="400"
        height="400"
        src={mainImage}
        alt="women shopping"
      />
      <h1 className="title">{title}</h1>
      <p className="paragraph">{introText}</p>
      <Link to="shoppingList">
        <button className="homeBtn">Start Shopping List</button>
      </Link>
    </div>
  );
}
