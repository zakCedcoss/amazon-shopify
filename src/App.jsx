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
        Box,
        amazonVal: "",
        shopifyOpt: "",
        shopifyVal: "",
        disabled: false,
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
        {components.length === 0 && (
          <div className="caution">
            Nothing to Show. Please click add attribute to show dropdowns
          </div>
        )}
        {components.map((comp) => {
          const { Box, id } = comp;
          return (
            <Box
              key={id}
              id={id}
              components={components}
              handleComponent={handleComponent}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
