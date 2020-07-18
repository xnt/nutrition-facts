import React from "react";
import "./App.css";
import NutritionFacts from "./NutritionFacts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NutritionFacts
        productName="Pizza"
        servingSize={{ amount: 20, dimension: "g" }}
        calories={20}
        fat={{
          saturated: {
            number: 5,
            percentage: 15,
          },
          trans: 2,
          total: {
            number: 8,
            percentage: 25,
          },
        }}
        cholesterol={{ number: 10, percentage: 15 }}
        sodium={{ number: 30, percentage: 20 }}
      />
    </div>
  );
}

export default App;
