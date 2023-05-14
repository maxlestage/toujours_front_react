import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavigationBar";
import GetLatestVideosFromThrasher from "./components/videos/GetLatestVideosFromThrasher";
import GetAllData from "./components/videos/GetAllData";
import useAuthChecker from "./services/useAuthChecker";

function App() {
  const isLoggedIn = useAuthChecker();
  const isOk = isLoggedIn.isLoggedIn;

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      {isOk ? (
        <>
          <GetAllData />
        </>
      ) : (
        <>
          <GetLatestVideosFromThrasher />
        </>
      )}
    </div>
  );
}

export default App;
