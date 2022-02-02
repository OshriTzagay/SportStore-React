import { useContext } from "react";
import { pantsContext } from "../../Context/ThePantsContext";

const Pants = () => {
  const { pants, setPants } = useContext(pantsContext);
  return (
    <div>
      <h1>Pants</h1>
      <div className="cardContainer">
        <br />
        {pants.map((pants) => {
          if (pants.ClothType == "Pants")
            return (
              <div className="card">
                <h4>{pants.ClothType}</h4>
                <li>{pants.Brand}</li>
                <img className="cardImgs" src={`${pants.Pic}`}></img>
                <p>Price:{pants.Price}$</p>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Pants;
