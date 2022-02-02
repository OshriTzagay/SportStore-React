import { useContext } from "react";
import { myContext } from "../../Context/TheContext";

const Shoes = () => {
  const {shoes,setShoes} = useContext(myContext);
 
  return (
    <div>
      <h1 >Shoes</h1>
      <div className="cardContainer">
        <br />
        <br />
        {shoes.map((shoe) => {
          return (
            <div className="card">
              <h4>{shoe.Company}</h4>
              <li>{shoe.Brand}</li>
              <img className="cardImgs" src={`${shoe.Pic}`}></img>
              <p>Price:{shoe.Price}$</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shoes;
