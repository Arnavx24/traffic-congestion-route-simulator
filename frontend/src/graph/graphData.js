export const graph = {
  A: [
    { node: "B", weight: 4 },
    { node: "C", weight: 2 }
  ],

  B: [
    { node: "A", weight: 4 },
    { node: "D", weight: 5 },
    { node: "E", weight: 3 }
  ],

  C: [
    { node: "A", weight: 2 },
    { node: "F", weight: 4 },
    { node: "D", weight: 3 }
  ],

  D: [
    { node: "B", weight: 5 },
    { node: "C", weight: 3 },
    { node: "G", weight: 2 }
  ],

  E: [
    { node: "B", weight: 3 },
    { node: "H", weight: 6 }
  ],

  F: [
    { node: "C", weight: 4 },
    { node: "H", weight: 2 }
  ],

  G: [
    { node: "D", weight: 2 },
    { node: "H", weight: 1 }
  ],

  H: [
    { node: "E", weight: 6 },
    { node: "F", weight: 2 },
    { node: "G", weight: 1 }
  ]
};