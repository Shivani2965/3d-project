import "./App.css";
import Dog from "./components/dog.jsx";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        < Dog />
      </Canvas>
    </>
  );
}

export default App;
