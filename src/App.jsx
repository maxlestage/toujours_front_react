import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavigationBar";
import ModalSignUpForm from "./components/forms/ModalSignUpForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <ModalSignUpForm/>
    </div>
  );
}

export default App;
