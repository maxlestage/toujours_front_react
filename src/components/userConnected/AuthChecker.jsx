import React, { useState, useEffect } from "react";
import sharedState from "../../services/sharedState";

function AuthChecker() {
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

  return (
    <div>
      {isLoggedIn ? (
        <p>Utilisateur connecté</p>
      ) : (
        <p>Utilisateur non connecté</p>
      )}
    </div>
  );
}

export default AuthChecker;
