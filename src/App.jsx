import "./App.css";
import Navbar from "./frontend/components/Navbar/Navbar";
import Home from "./frontend/pages/Home/Home";

function App() {
  return (
    <div className="body">
      <Navbar />
      <div className="app-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
