import React, { createContext, useEffect, useState } from "react";
import { getData } from "../Services/sportShoes-data-services";

export const myContext = createContext();

const TheProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
     getData().then(res => setShoes(res.shoeList));
  }, []);
 
  return (
    <myContext.Provider value={{ shoes, setShoes }}>
      {children}
    </myContext.Provider>
  );
};
export default TheProvider;
