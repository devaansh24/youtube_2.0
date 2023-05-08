import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Movies",
  "Technology",
  "Astronomy"
 
  
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
