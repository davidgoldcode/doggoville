export const alphabatize = (arr) => {
  let result = [];
  arr.reduce((accum, elem) => {
    let firstLetter = elem[0];

    if (!accum[firstLetter]) {
      accum[firstLetter] = [elem];
    } else {
      accum[firstLetter].push(elem);
    }

    return (result = accum);
  }, {});
  return result;
};
