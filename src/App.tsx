import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>User hobbies</h1>
      <div className="Table">
        <div className="UserColumn">
          <div className="Cell">John</div>
          <div className="Cell">Peter</div>
          <div className="Cell">Marcus</div>
        </div>
        <div className="HobbyColumn">
          <div className="HobbyCell">
            <div className="HobbyCell-passion">Passion: Medium</div>
            <div className="HobbyCell-hobby">Playing football</div>
            <div className="HobbyCell-since">Since 2014</div>
            <button className="HobbyCell-delete">x</button>
          </div>
          <div className="HobbyCell">
            <div className="HobbyCell-passion">Passion: Medium</div>
            <div className="HobbyCell-hobby">Playing football</div>
            <div className="HobbyCell-since">Since 2014</div>
            <button className="HobbyCell-delete">x</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
