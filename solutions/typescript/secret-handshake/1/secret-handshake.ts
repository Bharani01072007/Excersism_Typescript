export function commands(num: number): string[] {
  const result: string[] = [];

  if (num & 1) {
    result.push("wink");
  }

  if (num & 2) {
    result.push("double blink");
  }

  if (num & 4) {
    result.push("close your eyes");
  }

  if (num & 8) {
    result.push("jump");
  }

  if (num & 16) {
    result.reverse();
  }

  return result;
}