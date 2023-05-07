import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavigationBar";
import LoginForm from "./components/forms/login_form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
