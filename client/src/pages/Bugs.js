import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Bugs = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/bug")
      .then((res) => {
        setBugs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bugs">
      {bugs.map((bug) => (
        <div className="bug" key={bug.id}>
          <h3>{bug.name}</h3>
          <image src={bug.iconImage} alt={bug.name} />
          <p>Sell Price: {bug.sellPrice}</p>
          <p>Location: {bug.location}</p>
          <p>Weather: {bug.weather}</p>
          <p>Time: {bug.timeOfDay}</p>
          <p>Total Catches: {bug.totalCatches}</p>
        </div>
      ))}
    </div>
  );
};

export default Bugs;
