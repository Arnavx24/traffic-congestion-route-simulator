export function applyTraffic(graph, level) {
  let multiplier = 1;

  if (level === "Medium") {
    multiplier = 1.5;
  }

  if (level === "Heavy") {
    multiplier = 2;
  }

  const updatedGraph = {};

  for (const node in graph) {
    updatedGraph[node] = graph[node].map((neighbor) => ({
      ...neighbor,
      weight: Math.round(neighbor.weight * multiplier)
    }));
  }

  return updatedGraph;
}