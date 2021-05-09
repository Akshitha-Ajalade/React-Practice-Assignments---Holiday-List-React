import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" }
      //Goa(India), Amsterdam(Netherlands), New York(USA), Darjeeling(India), Tokyo(Japan), Lonavala(India)
    ];
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="oListKey">
          {this.cityList
            .filter((cName) => cName.country === "India")
            .map((e, index) => (
              <li key={`location${index + 1}`}> {e.name} </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
