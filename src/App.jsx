import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [components, setComponents] = useState([]);

  const handleComponent = (data) => {
    setComponents(data);
  };

  const handleClick = () => {
    const id = Math.floor(Math.random() * 2342523234);
    setComponents([
      ...components,
      {
        id,
        Src: Box,
        amazonVal: "",
        shopifyOpt: "",
        shopifyVal: "",
      },
    ]);
  };

  console.log(components);

  return (
    <div className="App">
      <section className="box">
        <div className="heading">
          <h3>Optional Attributes</h3>
          <button onClick={handleClick}>Add Attribute</button>
        </div>
      </section>
      {components.map((Comp) => {
        return (
          <Comp.Src
            key={Comp.id}
            id={Comp.id}
            components={components}
            handleComponent={handleComponent}
          />
        );
      })}
    </div>
  );
}

export default App;
