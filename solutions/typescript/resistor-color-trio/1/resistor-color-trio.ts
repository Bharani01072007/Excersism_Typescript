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

export function decodedResistorValue(colors: string[]): string {
  const first = COLORS.indexOf(colors[0]);
  const second = COLORS.indexOf(colors[1]);
  const multiplier = COLORS.indexOf(colors[2]);

  const resistance = (first * 10 + second) * Math.pow(10, multiplier);

  if (resistance >= 1_000_000_000) {
    return `${resistance / 1_000_000_000} gigaohms`;
  }

  if (resistance >= 1_000_000) {
    return `${resistance / 1_000_000} megaohms`;
  }

  if (resistance >= 1_000) {
    return `${resistance / 1_000} kiloohms`;
  }

  return `${resistance} ohms`;
}
