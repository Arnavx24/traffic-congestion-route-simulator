import { graph } from "./graph/graphData";
import { bfs } from "./algorithms/bfs";

function App() {
  const path = bfs(graph, "A", "D");

  return (
    <>
      <h1>Traffic Congestion Route Simulator</h1>

      <h2>BFS Route</h2>

      <p>{path.join(" → ")}</p>

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