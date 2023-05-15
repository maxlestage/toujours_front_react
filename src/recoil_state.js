import { atom } from "recoil";

const userConnectionState = atom({
  key: "userConnectionState",
  default: false,
});

export { userConnectionState };
