export class GradeSchool {
  private rosterData: Record<number, string[]> = {};

  add(student: string, grade: number): void {
    // prevent student being in multiple grades
    for (const g in this.rosterData) {
      const index = this.rosterData[g].indexOf(student);
      if (index !== -1) {
        this.rosterData[g].splice(index, 1);
      }
    }

    if (!this.rosterData[grade]) {
      this.rosterData[grade] = [];
    }

    this.rosterData[grade].push(student);
    this.rosterData[grade].sort();
  }

  grade(grade: number): string[] {
    return this.rosterData[grade] ? [...this.rosterData[grade]] : [];
  }

  roster(): Record<number, string[]> {
    const result: Record<number, string[]> = {};

    Object.keys(this.rosterData)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach(grade => {
        result[grade] = [...this.rosterData[grade]];
      });

    return result;
  }
}