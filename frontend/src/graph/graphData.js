export const graph = {
  A: [
    { node: "B", weight: 4 },
    { node: "C", weight: 2 }
  ],

  B: [
    { node: "A", weight: 4 },
    { node: "D", weight: 5 }
  ],

  C: [
    { node: "A", weight: 2 },
    { node: "D", weight: 3 }
  ],

  D: [
    { node: "B", weight: 5 },
    { node: "C", weight: 3 }
  ]
};