export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string | null = null;

  constructor() {}

  public get name(): string {
    if (!this._name) {
      this._name = Robot.generateUniqueName();
    }
    return this._name;
  }

  public resetName(): void {
    // Assign a new unique name without freeing the old one
    this._name = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private static generateUniqueName(): string {
    // Guard against exhausting the namespace
    if (Robot.usedNames.size >= 26 * 26 * 1000) {
      throw new Error("No more unique names available");
    }

    let newName: string;
    do {
      newName = Robot.generateRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);
    return newName;
  }

  private static generateRandomName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters =
      letters[Math.floor(Math.random() * 26)] +
      letters[Math.floor(Math.random() * 26)];
    const randomDigits = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    return randomLetters + randomDigits;
  }
}