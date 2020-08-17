export const capitalizeEveryWord = (str) => {
  if (typeof str !== "string")
    return "capitalizeEveryWord() only accepts strings";

  let strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(" ");
};
