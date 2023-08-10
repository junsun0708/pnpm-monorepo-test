import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@web-client/common";

function App() {
  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button>common에서 가져왔어요</Button>
      </div>
    </div>
  );
}

export default App;
