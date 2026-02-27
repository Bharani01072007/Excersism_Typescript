export function isPangram(sentence: string): boolean {
  const letters = new Set(
    sentence
      .toLowerCase()
      .replace(/[^a-z]/g, "")
  );

  return letters.size === 26;
}