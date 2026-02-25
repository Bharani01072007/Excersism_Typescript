export function toRna(dna: string): string {
  const transcriptionMap: Record<string, string> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  return dna
    .split("")
    .map(nucleotide => {
      if (!transcriptionMap[nucleotide]) {
        throw new Error("Invalid input DNA.");
      }
      return transcriptionMap[nucleotide];
    })
    .join("");
}