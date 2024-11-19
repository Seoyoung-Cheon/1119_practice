import Mainsection from "./components/Mainsection";
import Secondsection from "./components/Secondsection";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Mainsection />
      <Secondsection />
    </div>
  );
};

export default App;
