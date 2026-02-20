import { useState } from "react";
import "./App.css";
function App() {
  const [userMeal, setUserMeal] = useState("");
  const [meals, setMeals] = useState([]);

  function getMeals(e) {
    e.preventDefault();
    try {
    } catch (err) {}
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="meal"
          id="meal"
          onChange={(e) => setUserMeal(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;
