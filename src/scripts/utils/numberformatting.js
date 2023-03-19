export const dateFormatting = (number) => {
  return number.split("").reduce((acc, next, index) => {
    if (index !== 0 && !(index % 2)) {
      acc += '/';
    }
    return acc += next;
  }, "");
};

export const cardFormatting = (number) => {
  return number.split("").reduce((acc, next, index) => {
    if (index !== 0 && !(index % 4)) { acc += " ";}
    return acc + next;
  }, "")
};

