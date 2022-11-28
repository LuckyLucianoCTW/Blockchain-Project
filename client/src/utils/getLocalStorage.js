export const getLocalStorage = (key) => {
  const serializedRes = window.localStorage.getItem(key);
  if (serializedRes && serializedRes !== "undefined")
    return JSON.parse(serializedRes);
  return null;
};
