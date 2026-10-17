import { graph } from "./graph/graphData";

function App() {
  return (
    <>
      <h1>Traffic Congestion Route Simulator</h1>

      <h2>Road Connections</h2>

      <ul>
        {Object.entries(graph).map(([node, neighbors]) => (
          <li key={node}>
            {node} →{" "}
            {neighbors
              .map((neighbor) => `${neighbor.node} (${neighbor.weight})`)
              .join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;