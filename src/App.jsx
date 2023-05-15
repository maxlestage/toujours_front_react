import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavigationBar";
import GetLatestVideosFromThrasher from "./components/videos/GetLatestVideosFromThrasher";
import GetAllData from "./components/videos/GetAllData";
import useAuthChecker from "./services/useAuthChecker";
import { userConnectionState } from "./recoil_state";
import { useEffect } from "react";

function App() {
  const [userConnection, setUserConnection] =
    useRecoilState(userConnectionState);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setUserConnection(true);
    } else {
      setUserConnection(false);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      {userConnection ? (
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
