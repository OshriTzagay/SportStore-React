import { createContext, useEffect, useState } from "react";
import Shirts from "../Components/ShirtCompo/Shirts";
import getShirts from "../Services/sportShirts-data-service";
export const ShirtContext =  createContext();

const ShirtsProvider =()=>{
    const [shirts,setShirts] = useState([]);
    useEffect(()=>{
        getShirts().then(res=>setShirts(res.ClothesList));
    },[])
    return(
    <ShirtContext.Provider value={{shirts,setShirts}}>
        <Shirts/>
    </ShirtContext.Provider>
    )
}
export default ShirtsProvider;