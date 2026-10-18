import { useState } from "react";
import { graph } from "./graph/graphData";
import { bfs } from "./algorithms/bfs";
import { dijkstra } from "./algorithms/dijkstra";

function App() {
  const [source, setSource] = useState("A");
  const [destination, setDestination] = useState("D");
  const [route, setRoute] = useState([]);
  const [algorithm, setAlgorithm] = useState("BFS");
  const [cost, setCost] = useState(null);

  const findRoute = () => {
  if (algorithm === "BFS") {
    const result = bfs(graph, source, destination);

    setRoute(result);
    setCost("Not Applicable");
  }

  if (algorithm === "Dijkstra") {
    const result = dijkstra(
      graph,
      source,
      destination
    );

    setRoute(result.path);
    setCost(result.cost);
  }
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

      <div>
        <label>Algorithm: </label>

        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option>BFS</option>
          <option>Dijkstra</option>
          <option>A*</option>
        </select>
      </div>

      <br />

      <button onClick={findRoute}>
        Find Route
      </button>

      <hr />

      <h3>Selected Algorithm</h3>
      <p>{algorithm}</p>

      <h3>Source</h3>
      <p>{source}</p>

      <h3>Destination</h3>
      <p>{destination}</p>

      <h3>Calculated Route</h3>

      <p>
        {route.length > 0
          ? route.join(" → ")
          : "Select nodes and click Find Route"}
      </p>
          <h3>Total Cost</h3>

<p>{cost}</p>

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