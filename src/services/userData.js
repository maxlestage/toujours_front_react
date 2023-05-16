import sharedUserState from "./sharedUserState";

function userData() {
  let sharedUserData = sharedUserState.user;

  const localStorageToken = localStorage.getItem("token");

  if (!localStorageToken && sharedUserData !== "") {
    localStorage.setItem("token", sharedUserData);
  }

  const user = localStorage.getItem("user");

  const setSharedUserData = (userData) => {
    sharedUserState = userData;
  };

  return {
    user,
    setSharedUserData,
  };
}

export default userData;
