import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { Originals, Action, Romance, Horror, Documentaries } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={Originals} />
      <RowPost title="Action" isSmall url={Action} />
      <RowPost title="Romance" isSmall url={Romance} />
      <RowPost title="Horror" isSmall url={Horror} />
      <RowPost title="Documantaries" isSmall url={Documentaries} />
    </div>
  );
}

export default App;
