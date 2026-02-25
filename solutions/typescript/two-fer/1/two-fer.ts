export function twoFer(name?: string): string {
  if (!name) {
    return "One for you, one for me.";
  }
  return `One for ${name}, one for me.`;
}

