export const rateStars = (str) => {
  let rounded = Math.floor(str.rate);
  const rateIcon = "★";
  let array = [];
  for (let i = 0; i < rounded; i++) {
    array.push(rateIcon);
  }
  return array;
};
