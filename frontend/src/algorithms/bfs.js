export function bfs(graph, start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current === end) {
      return path;
    }

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor.node)) {
        visited.add(neighbor.node);

        queue.push([
          ...path,
          neighbor.node
        ]);
      }
    }
  }

  return [];
}