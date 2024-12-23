import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Video from "./Components/Video";

function App() {
  const [status, setStatus] = useState(false);
  return <div className="min-h-[100vh] min-w-[100vw] bg-[rgb(0_8_28)]" > {status ? <Video /> : <Main setStatus = {setStatus} />}</div>;
}

export default App;
