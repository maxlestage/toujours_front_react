import { useState, useEffect } from "react";
import sharedState from "./sharedState";

function useAuthChecker() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    const sharedStateBearer = sharedState.Bearer;

    if (!localStorageToken && sharedStateBearer !== "") {
      localStorage.setItem("token", sharedStateBearer);
    }

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [isLoggedIn]);

  return isLoggedIn;
}

export default useAuthChecker;
