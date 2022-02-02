import React from "react";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Pants from "../Components/PantsCompo/Pants";
import Shoes from "../Components/ShoesCompo/Shoes";
import Shirts from "../Components/ShirtCompo/Shirts";
import TheProvider from "../Context/TheContext";
import PantsProvider from "../Context/ThePantsContext";
import ShirtsProvider from "../Context/TheShirtContext";
const AppRouter = ()=>{
    return(
        <BrowserRouter>
         <TheProvider>
        <PantsProvider>
          <ShirtsProvider>
            <Shoes />
            <Pants />
            <Shirts />
          </ShirtsProvider>
        </PantsProvider>
      </TheProvider>
        <Routes>
        <Route path="/" element={<Shoes/>}></Route>
        <Route path="/pants" element={<Pants/>}></Route>


        </Routes>
        
        </BrowserRouter>
    )
}
export default AppRouter;