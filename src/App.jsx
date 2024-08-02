import { useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const btns = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "blueviolet",
    "pink",
  ];
  function setColor1(val) {
    setColor(val);
  }
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            {btns.map((value, index, array) => (
              <Button
                key={index}
                setColor={setColor1}
                color={value}
                cname={value.toUpperCase()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
