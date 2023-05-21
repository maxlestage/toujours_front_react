import { atom } from "recoil";

const userConnectionState = atom({
  key: "userConnectionState",
  default: false,
});

const addNewPost = atom({
  key: "addingNewPost",
  default: false,
});

export { userConnectionState, addNewPost };
