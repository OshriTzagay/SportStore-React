import logo from "./logo.svg";
import "./App.css";
import { getData } from "./Services/sportShoes-data-services";
import Shoes from "./Components/ShoesCompo/Shoes";
import TheProvider from "./Context/TheContext";
import PantsProvider from "./Context/ThePantsContext";
import Pants from "./Components/PantsCompo/Pants";
import AppRouter from "./AppRouter/AppRouter";
import ShirtsProvider from "./Context/TheShirtContext";
import Shirts from "./Components/ShirtCompo/Shirts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      //! App is Working ,But when trying to Excecute with the AppRouter, gets Errors ,need to fix.!//
      {/* /////////   Come And Fix App Router    ,////// */}
      <AppRouter/>
      {/* <TheProvider>
        <PantsProvider>
          <ShirtsProvider>
            <Shoes />
            <Pants />
            <Shirts />
          </ShirtsProvider>
        </PantsProvider>
      </TheProvider> */}
    </div>
  );
}

export default App;
