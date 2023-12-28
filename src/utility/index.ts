export const setDataInLocalStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key) || "[]";
  return JSON.parse(data);
};

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
