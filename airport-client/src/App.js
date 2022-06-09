import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import TableDepartures from "./Components/TableDepartures/TableDepartures";
import AddFlight from "./Components/AddFlight/AddFlight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/TableDepartures" element={<TableDepartures />} />
          <Route exact path="/AddFlight" element={<AddFlight />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
