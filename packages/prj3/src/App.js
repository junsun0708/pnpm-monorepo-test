import logo from "./logo.svg";
import "./App.css";
//import { Button } from "@web-client/common";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <div className="card">
          <Button>common에서 가져왔어요</Button>
        </div> */}
      </header>
    </div>
  );
}

export default App;
