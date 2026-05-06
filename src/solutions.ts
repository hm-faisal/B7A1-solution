/**
 * Filter even numbers from the random numbers [P-1]
 *
 * @param numbers - The numbers need to filter
 * @returns number[] numbers or lor error
 */
function filterEvenNumbers(numbers: unknown): number[] {
  if (!Array.isArray(numbers)) {
    throw new Error("numbers must be an Array of numbers");
  }

  return numbers.reduce((acc, cur) => {
    if (typeof cur !== "number") {
      throw new Error("Inputs must be a numbers");
    }

    if (cur % 2 === 0) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

/**
 * reverse a string [P-2]
 *
 * @param {unknown} str - input that wil reverse
 * @returns {string} reversed string
 */
function reverseString(str: unknown): string {
  if (typeof str !== "string") {
    throw new Error("Input must be an string");
  }

  return str
    .split("")
    .reduce((acc: string[], cur) => {
      acc.unshift(cur);
      return acc;
    }, [])
    .join("");
}

/**
 * to check a input type is either string or number [P-3]
 *
 * @param {unknown} input - input to check types
 * @returns {StringOrNumber} String or Number
 */
type StringOrNumber = string | number;
function checkType(input: unknown): StringOrNumber {
  if (typeof input === "string") {
    return "String";
  }

  if (typeof input === "number") {
    return "Number";
  }

  throw new Error("Invalid input type");
}

/**
 * extract a property value form a object [P-4]
 *
 * @param {Object} obj - input object
 * @param {string} key - property name
 * @returns property value
 */
function getProperty<t, k extends keyof t>(obj: t, key: k): t[k] {
  return obj[key];
}

/**
 * toggle a book read status [P-5]
 *
 * @param {Book} book - book object that need to toggle Read status
 * @returns - return that object with extra property "isRead"
 */
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book) {
  return { ...book, isRead: true };
}

/**
 * Person class [P-6]
 */

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }

  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}

/**
 *
 * @param {number[]} item1 - 1st set of numbers
 * @param {number[]} item2 - 2nd set of numbers
 * @returns set of numbers with common in item1, and item2
 */
function getIntersection(item1: number[], item2: number[]) {
  if (!Array.isArray(item1) || !Array.isArray(item2)) {
    throw new Error("Inputs must be two array");
  }

  return item1.reduce((acc: number[], cur) => {
    if (typeof cur !== "number") {
      throw new Error("Invalid input");
    }

    if (item2.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
