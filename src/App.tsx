import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Value } from "./components/Value";
// import { Save } from "./components/Save";

function App() {
  const [total, setTotal] = useState(0);
  // const [cur_500, set500] = useState(0);

  return (
    <>
      <div>
        <section
          style={{
            display: "flex",
            flex: "1 1 auto ",
            justifyContent: "space-around",
          }}>
          <div>Total : </div>
          <div>{total}</div>
        </section>
        <Value total_={total} setTotal={setTotal}></Value>
        {/* <Save></Save> */}
      </div>
    </>
  );
}

export default App;
