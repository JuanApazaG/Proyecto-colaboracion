import { useState } from "react";
import ContainerExample from "./componentsBootstrap/Row";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ContainerExample></ContainerExample>
    </div>
  );
}

export default App;
