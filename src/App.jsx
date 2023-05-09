import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavigationBar";
import GetAllData from "./components/videos/GetAllData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <GetAllData />
    </div>
  );
}

export default App;
