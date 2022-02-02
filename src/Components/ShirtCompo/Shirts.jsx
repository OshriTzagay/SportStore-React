import React, { useContext } from "react";
import { ShirtContext } from "../../Context/TheShirtContext";
const Shirts = () => {
  const { shirts, setShirts } = useContext(ShirtContext);
  return (
    <div>
          <h1>Shirts</h1>
      <div className="cardContainer">
        {shirts.map((shirt) => {
          if (shirt.ClothType == "Shirt") {
            return (
              <div className="card">
                <h4>{shirt.ClothType}</h4>
                <li>{shirt.Brand}</li>
                <img className="cardImgs" src={`${shirt.Pic}`}></img>
                <p>Price:{shirt.Price}$</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Shirts;
