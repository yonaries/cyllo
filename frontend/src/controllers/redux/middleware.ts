//MIDDLEWARE to save to local storage
export const saveToLocalStorageMiddleware = ({ getState }: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState())); //saving to local storage
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    const data = localStorage.getItem("applicationState")!;
    return JSON.parse(data); // re-hydrate the store
  }
};
