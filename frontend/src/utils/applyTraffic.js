const trafficMultipliers = {
  Normal: 1,
  Medium: 1.5,
  Heavy: 2
};

export function applyTraffic(graph, roadStart, roadEnd, level) {
  const multiplier = trafficMultipliers[level];

  if (multiplier === undefined) {
    throw new Error(`Unsupported traffic level: ${level}`);
  }

  if (
    !graph[roadStart]?.some((neighbor) => neighbor.node === roadEnd) ||
    !graph[roadEnd]?.some((neighbor) => neighbor.node === roadStart)
  ) {
    throw new Error(`Road ${roadStart}-${roadEnd} is not in the graph`);
  }

  const updatedGraph = {};

  for (const node in graph) {
    updatedGraph[node] = graph[node].map((neighbor) => {
      const selectedRoad =
        (node === roadStart && neighbor.node === roadEnd) ||
        (node === roadEnd && neighbor.node === roadStart);

      return {
        ...neighbor,
        weight: selectedRoad
          ? Math.round(neighbor.weight * multiplier)
          : neighbor.weight
      };
    });
  }

  return updatedGraph;
}