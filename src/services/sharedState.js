let sharedState = {
  Bearer: "",
  setToken: (data) => {
    sharedState.Bearer = data;
    return sharedState.Bearer;
  },
};

export default sharedState;
