export const sum = (...arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

export function setMessage(msg) {
  customMessage = msg;
}

export let customMessage = "Welcome to Export and Import Modules";
