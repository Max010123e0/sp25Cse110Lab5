// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Tests for isPhoneNumber
describe('isPhoneNumber function', () => {
  // True cases
  test('return true for a valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('return true for a format like 858-123-4758', () => {
    expect(isPhoneNumber('858-123-4758')).toBe(true);
  });

  // False cases
  test('return false for a phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });

  test('return false for incorrect format', () => {
    expect(isPhoneNumber('12345678901')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail function', () => {
  // True cases
  test('return true for a valid UCSD email', () => {
    expect(isEmail('gyk002@ucsd.edu')).toBe(true);
  });

  test('return true for an email address with underscores', () => {
    expect(isEmail('gyk_002@ucsd.edu')).toBe(true);
  });

  // False cases
  test('return false for an email without @ symbol', () => {
    expect(isEmail('userexample.com')).toBe(false);
  });

  test('return false for an email with invalid domain extension', () => {
    expect(isEmail('user@domain.longextension')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword function', () => {
  // True cases
  test('return true for a valid password starting with a letter', () => {
    expect(isStrongPassword('a123_45')).toBe(true);
  });

  test('return true for a valid password with mixed case letters', () => {
    expect(isStrongPassword('Test1234')).toBe(true);
  });

  // False cases
  test('return false for a password starting with a number', () => {
    expect(isStrongPassword('1abcdef')).toBe(false);
  });

  test('return false for a password with special characters', () => {
    expect(isStrongPassword('pass@word1')).toBe(false);
  });
});

// Tests for isDate
describe('isDate function', () => {
  // True cases
  test('return true for a date with single-digit month and day', () => {
    expect(isDate('1/2/2023')).toBe(true);
  });

  test('return true for a date with double-digit month and day', () => {
    expect(isDate('12/31/2023')).toBe(true);
  });

  // False cases
  test('return false for a date with dashes instead of slashes', () => {
    expect(isDate('12-31-2023')).toBe(false);
  });

  test('return false for a date with text month', () => {
    expect(isDate('Dec/25/2023')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor function', () => {
  // True cases
  test('return true for a hex color with #', () => {
    expect(isHexColor('#abc')).toBe(true);
  });

  test('return true for a hex color without #', () => {
    expect(isHexColor('123abc')).toBe(true);
  });

  // False cases
  test('return false for a hex color with invalid letters', () => {
    expect(isHexColor('#xyz')).toBe(false);
  });

  test('return false for a hex color with wrong length', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });
});
