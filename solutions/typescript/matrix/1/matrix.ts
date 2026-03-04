export class Matrix {
  private data: number[][];

  constructor(input: string) {
    this.data = input
      .split("\n")
      .map(row =>
        row.split(" ").map(value => Number(value))
      );
  }

  get rows(): number[][] {
    return this.data;
  }

  get columns(): number[][] {
    return this.data[0].map((_, colIndex) =>
      this.data.map(row => row[colIndex])
    );
  }
}