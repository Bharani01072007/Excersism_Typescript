export function hey(message: string): string {
  const trimmed = message.trim();

  const isSilent = trimmed === "";
  const isQuestion = trimmed.endsWith("?");
  const hasLetters = /[a-z]/i.test(trimmed);
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();

  if (isSilent) {
    return "Fine. Be that way!";
  }

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
}