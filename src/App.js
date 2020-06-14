import React from "react";
import "./App.css";
import NutritionFacts from "./NutritionFacts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NutritionFacts productName="Pizza" servingSize={{ amount: 20, dimension: "g" }} />
    </div>
  );
}

export default App;
