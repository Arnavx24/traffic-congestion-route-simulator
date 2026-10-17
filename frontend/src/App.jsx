import { useState } from "react";
import { graph } from "./graph/graphData";
import { bfs } from "./algorithms/bfs";

function App() {
  const [source, setSource] = useState("A");
  const [destination, setDestination] = useState("D");
  const [route, setRoute] = useState([]);

  const findRoute = () => {
    const result = bfs(graph, source, destination);
    setRoute(result);
  };

  return (
    <>
      <h1>Traffic Congestion Route Simulator</h1>

      <h2>Route Finder</h2>

      <div>
        <label>Source: </label>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          {Object.keys(graph).map((node) => (
            <option key={node} value={node}>
              {node}
            </option>
          ))}
        </select>
      </div>

      <br />

      <div>
        <label>Destination: </label>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          {Object.keys(graph).map((node) => (
            <option key={node} value={node}>
              {node}
            </option>
          ))}
        </select>
      </div>

      <br />

      <button onClick={findRoute}>
        Find Route
      </button>

      <h3>Calculated Route</h3>

      <p>
        {route.length > 0
          ? route.join(" → ")
          : "Select nodes and click Find Route"}
      </p>

      <hr />

      <h2>Road Connections</h2>

      <ul>
        {Object.entries(graph).map(([node, neighbors]) => (
          <li key={node}>
            {node} →{" "}
            {neighbors
              .map(
                (neighbor) =>
                  `${neighbor.node} (${neighbor.weight})`
              )
              .join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;