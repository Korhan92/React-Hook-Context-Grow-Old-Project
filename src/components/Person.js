import React, { useContext } from "react";
import myContext from "../context/MyContext";
import './Person.css'



const Person = () => {
  const {user,growOlder}=useContext(myContext)
  return (
    <div className="person">
      <p>Age: {user.age}</p>
      <p>Name: {user.name}</p>
      <button onClick={growOlder}>🍰🍥🎂</button>
    </div>
  );
};

export default Person;
