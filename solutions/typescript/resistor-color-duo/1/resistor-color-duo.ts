const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export function decodedValue(colors: string[]): number {
  const first = COLORS.indexOf(colors[0]);
  const second = COLORS.indexOf(colors[1]);

  return first * 10 + second;
}
