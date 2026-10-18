export function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const unvisited = [];

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
    unvisited.push(node);
  });

  distances[start] = 0;

  while (unvisited.length > 0) {
    unvisited.sort((a, b) => distances[a] - distances[b]);

    const current = unvisited.shift();

    if (current === end) {
      break;
    }

    for (const neighbor of graph[current]) {
      const newDistance =
        distances[current] + neighbor.weight;

      if (newDistance < distances[neighbor.node]) {
        distances[neighbor.node] = newDistance;
        previous[neighbor.node] = current;
      }
    }
  }

  const path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    cost: distances[end]
  };
}