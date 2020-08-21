import * as AppAuth from "expo-app-auth";
import { AsyncStorage } from "react-native";
import { AppAuthConfig } from "../config";

let StorageKey = "@ReactnativeAuthentication:GoogleOAuthKey";
export async function signInAsync() {
  try {
    let authState = await AppAuth.authAsync(AppAuthConfig);
    await cacheAuthAsync(authState);
    return authState;
  } catch (e) {
    return {
      state: "error",
      message: e,
    };
  }
}

async function cacheAuthAsync(authState) {
  return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

export async function getCachedAuthAsync() {
  let value = await AsyncStorage.getItem(StorageKey);
  let authState = JSON.parse(value);
  if (authState) {
    if (checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState);
    } else {
      return authState;
    }
  }
  return null;
}

function checkIfTokenExpired({ accessTokenExpirationDate }) {
  return new Date(accessTokenExpirationDate) < new Date();
}

async function refreshAuthAsync({ refreshToken }) {
  let authState = await AppAuth.refreshAsync(config, refreshToken);
  await cacheAuthAsync(authState);
  return authState;
}
