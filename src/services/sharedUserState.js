let sharedUserState = {
  user: "",
  setUserData: (data) => {
    sharedState.user = data;
    return sharedState.user;
  },
};

export default sharedUserState;
