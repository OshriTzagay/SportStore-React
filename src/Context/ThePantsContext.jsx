import React, { createContext, useEffect, useState } from "react";
import getPants from "../Services/sportPants-data-service";
export const pantsContext = createContext();
const PantsProvider  =({children})=>{
    const[pants,setPants] = useState([]);
    useEffect(()=>{
        getPants().then(res=>setPants(res.ClothesList))
    },[])
    return(
        <pantsContext.Provider value={{pants,setPants}}>
            {children}
        </pantsContext.Provider>
    )
}
export default PantsProvider;
