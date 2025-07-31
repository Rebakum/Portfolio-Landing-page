import "./App.css";
import Home1 from "./Components/Home/Home1";
import Navber from "./Components/Sheard/Navber/Navber";

function App() {
  return (
    <>
      <div>
        <Navber />
        <div className="container mx-auto  ">
          <Home1 />
        </div>
      </div>
    </>
  );
}

export default App;
