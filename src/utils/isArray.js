// Checks if the data is an array and returns true or false.
export const isArray = (data) =>
  data.constructor.toString().indexOf("Array") != -1 ? true : false;
