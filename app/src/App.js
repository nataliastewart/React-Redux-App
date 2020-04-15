import React from "react";
import "./App.css";
import BreakingBadQuotes from "./components/BreakingBadQuotes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/116702/204469/Heisenberg-Cool-Face-Breaking-Bad-Vinyl-Decal-Sticker__21529.1511164840.jpg?c=2&imbypass=on"
          className="App-logo"
          alt="logo"
        />
      </header>

      <BreakingBadQuotes />
    </div>
  );
}

export default App;
