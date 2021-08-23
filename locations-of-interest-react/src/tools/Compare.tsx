function compareStrings(a: string, b: string, asc: boolean): number {
  if (!a || a === "") {
    return 1;
  }

  let result = (a || "").localeCompare(b || "");

  if (!asc) {
    result *= -1;
  }

  return result;
}

function compareNumbers(a: number, b: number, asc: boolean): number {
  let result = a - b;

  if (!asc) {
    result *= -1;
  }

  return result;
}

function compareDates(a: Date, b: Date, asc: boolean): number {
  let result = a > b ? 1 : -1;

  if (!asc) {
    result *= -1;
  }

  return result;
}

const Compare = {
  numbers: compareNumbers,
  dates: compareDates,
  strings: compareStrings,
};

export default Compare;
