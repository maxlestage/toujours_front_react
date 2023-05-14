import sharedState from "./sharedState";

function useAuthChecker() {
  let isLoggedIn = false;
  let sharedStateBearer = sharedState.Bearer;

  const localStorageToken = localStorage.getItem("token");

  if (!localStorageToken && sharedStateBearer !== "") {
    localStorage.setItem("token", sharedStateBearer);
  }

  const token = localStorage.getItem("token");
  isLoggedIn = !!token;

  const updateSharedStateBearer = (newBearer) => {
    sharedStateBearer = newBearer;
  };

  return {
    token,
    isLoggedIn,
    updateSharedStateBearer,
  };
}

export default useAuthChecker;
