export function isPangram(input) {
  // if input not string
  if (typeof input !== "string") {
    return false;
  }

  // if input length is less than 26
  if (input.length < 26) {
    return false;
  }

  // lowercase the input
  const lowerInput = input.toLowerCase();

  // to store unique alphabets
  const letters = new Set();

  for (let i = 0; i < lowerInput.length; i++) {
    const char = lowerInput[i];
    if (char >= "a" && char <= "z") {
      letters.add(char);
    }

    // Return early if we've found all 26 letters
    if (letters.size === 26) {
      return true;
    }
  }

  // iterated over the string and does not found all 26 alphabets
  return false;
}
