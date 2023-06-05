import "./App.css";
import BootCamp from "./components/BootCamp";
import Company from "./components/Company";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Company />
      <BootCamp />
    </div>
  );
}

export default App;
