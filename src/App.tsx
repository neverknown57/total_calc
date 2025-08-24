import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Value } from "./components/Value";
// import { Save } from "./components/Save";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <section
        style={{
          display: "flex",
          // flex: "1 1 auto ",
          justifyContent: "space-around",
          // margin: "2em 1em 0.6em 0",
          padding: "1em 2em",
          boxShadow: "0 1px 0.1 #423f3dbb",
          background: "#f8f9fa",
          color: "#212529",
          fontWeight: 700,
          lineHeight: 1.7,
          borderRadius: "1rem 1rem 0.5rem 0.5rem",
          fontSize: "x-large",
          letterSpacing: "3px",
        }}>
        <div
          style={{
            background: "#a3daff2e",
            padding: "0.6em 1.2em",
            borderRadius: "1em",
          }}>
          Total :{" "}
        </div>
        <div
          style={{
            background: "#a3daff2e",
            padding: "0.6em 1.2em",
            borderRadius: "1em",
          }}>
          {total}
        </div>
      </section>
      <Value total_={total} setTotal={setTotal}></Value>
      {/* <Save></Save> */}
    </>
  );
}

export default App;
