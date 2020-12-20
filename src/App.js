import React, { useState } from "react";
import "./styles.css";
import { foodData } from "./Data";

export default function App() {
  var foodList = [
    // "All foods",
    "chinese food",
    "Southindian food",
    "Italian Food",
    "Indian Food"
  ];

  console.log("list", foodList);

  const [foodItem, setFoodItem] = useState("All Foods");

  function getFoods(item) {
    setFoodItem(item);
  }

  return (
    <div className="App">
      <h1>Food Recommandation!</h1>
      <h2> Best Food available in our city</h2>
      <hr />

      <div className="foodList">
        {foodList.map((item) => {
          return (
            <button key={item} value={item} onClick={() => getFoods(item)}>
              {item}
            </button>
          );
        })}
      </div>

      <div>
        {foodData[foodItem].map((food) => {
          return (
            <div>
              <img alt="" className="food-img" src={food.img} />
              <div className="food-info">
                <h1>{food.name} </h1>
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <h5>
          Made By <a href="https://lodhibharti.github.io/">Bharti Lodhi</a>
        </h5>
      </footer>
    </div>
  );
}
