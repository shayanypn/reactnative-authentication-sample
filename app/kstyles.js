import { Platform } from "react-native";
import kcolors from "./kcolors";

const defualtText = {
  color: kcolors.white,
  fontSize: 17,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
};

export default {
  ...kcolors,
  bgDarkBlue: {
    backgroundColor: kcolors.darkBlue,
  },
  bgGray: {
    backgroundColor: kcolors.gray,
  },
  textWhite: {
    color: kcolors.white,
  },
  text: {
    ...defualtText,
  },
  textH1: {
    ...defualtText,
    fontWeight: "bold",
    fontSize: 44,
  },
  textH3: {
    ...defualtText,
    fontWeight: "bold",
    fontSize: 34,
  },
};
