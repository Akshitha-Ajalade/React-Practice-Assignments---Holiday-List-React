import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { keys: "location1", name: "Goa", country: "India" },
      { keys: "location2", name: "Amsterdam", country: "Netherlands" },
      { keys: "location3", name: "New York", country: "USA" },
      { keys: "location4", name: "Darjeeling", country: "India" },
      { keys: "location5", name: "Tokyo", country: "Japan" },
      { keys: "location6", name: "Lonavala", country: "India" },
      { keys: "location7", name: "Brandenburg Gate", country: "Germany" },
      { keys: "location8", name: "Reichstag Building", country: "Germany" },
      { keys: "location9", name: "Museum Island", country: "Germany" },
      { keys: "location10", name: "Munnar", country: "India" },
      { keys: "location11", name: "Leh Ladakh", country: "India" },
      { keys: "location12", name: "Goa", country: "India" },
      { keys: "location13", name: "Agra", country: "India" },
      { keys: "location14", name: "Dalhousie", country: "India" },
      { keys: "location15", name: "Coorg", country: "India" },
      { keys: "location16", name: "Rome", country: "Italy" },
      { keys: "location17", name: "Milan", country: "Italy" },
      { keys: "location18", name: "Venice", country: "Italy" },
      { keys: "location19", name: "Varanasai", country: "India" },
      { keys: "location20", name: "Jaipur", country: "India" },
      { keys: "location21", name: "The Hofburg", country: "Austria" },
      { keys: "location22", name: "Belvedere Palace", country: "Austria" },
      { keys: "location23", name: "St. Stephen Cathedral", country: "Austria" },
      { keys: "location24", name: "Kahna National Park", country: "India" },
      { keys: "location25", name: "Amritsar", country: "India" },
      { keys: "location26", name: "Mussoorie", country: "India" },
      { keys: "location27", name: "Mount Abu", country: "India" },
      { keys: "location28", name: "Tirupati", country: "India" }
    ];
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol>
          {this.cityList
            .filter((cName) => cName.country === "India")
            .map((e) => (
              <li key={e.keys}> {e.name} </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
