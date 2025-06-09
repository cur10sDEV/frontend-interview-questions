const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = LOWERCASE.toUpperCase();
const NUMBERS = "0123456789";
const SYMBOLS = "~!@#$%&*()-{}_[]+=";

export const DEFAULT_PASSWORD_OPTIONS = {
  numbers: false,
  lowercase: true,
  uppercase: false,
  symbols: false,
  length: 8,
};

export type PasswordOptions = {
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
  symbols: boolean;
  length: number;
};

export const generatePassword = (
  { numbers, length, lowercase, uppercase, symbols } = {
    numbers: false,
    lowercase: true,
    uppercase: false,
    symbols: false,
    length: 8,
  }
) => {
  let data = "";
  if (lowercase) {
    data += LOWERCASE;
  }
  if (uppercase) {
    data += UPPERCASE;
  }
  if (numbers) {
    data += NUMBERS;
  }
  if (symbols) {
    data += SYMBOLS;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const c = data.charAt(Math.floor(Math.random() * data.length));
    password += c;
  }

  return password;
};
