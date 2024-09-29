'use client'
import React from "react";
import AnimatedTooltip from "../ui/animated-tooltip";

const items = [
  { id: 1, name: "John", designation: "Developer", image: "/human.jpg" },
  { id: 2, name: "Jane", designation: "Designer", image: "/human2.jpg" },
  { id: 3, name: "Smith", designation: "Designer", image: "/human3.jpg" },
  { id: 4, name: "Harry", designation: "Designer", image: "/human4.jpg" },
  { id: 5, name: "Jennifer", designation: "Designer", image: "/human5.jpg" },
];

function App() {
  return (
    <div>
      <AnimatedTooltip items={items} />
    </div>
  );
}

export default App;
