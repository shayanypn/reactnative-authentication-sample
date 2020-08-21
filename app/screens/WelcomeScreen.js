import React from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as AppAuth from "expo-app-auth";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import kstyles from "../kstyles";

const WelcomeScreen = ({ navigation }) => {
  let [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && !authState) {
        setAuthState(cachedAuth);
      }
    })();
  }, []);

  return (
    <Screen style={kstyles.bgDarkBlue}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "#000000"]}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.head}>
          <Text style={styles.title}>YOUR PERSONAL TRAINER, RETHOUGHT.</Text>
          <Text style={styles.description}>
            Your everyday life is stressful enough.Stay flexible with online
            support in everyday life.
          </Text>
        </View>
        <View style={styles.foot}>
          <AppButton title="Sign In with Apple" icon="apple" />
          <AppButton
            title="Sign In with Google"
            bgColor={kstyles.primary}
            icon="google"
            onPress={async () => {
              const _authState = await signInAsync();
              console.log(_authState);
            }}
          />
          <AppButton title="Sign Up with Email" bgColor={kstyles.green} />
          <AppButton
            title="Log In"
            bgColor={kstyles.secondary}
            onPress={() => navigation.navigate("Signin")}
          />
          <Text style={styles.bottomText}>Explore the classes</Text>
        </View>
      </LinearGradient>
    </Screen>
  );
};

const styles = StyleSheet.create({
  head: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  foot: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    ...kstyles.textH1,
    ...kstyles.textWhite,
    paddingRight: 30, // TODO should not be constant
    marginBottom: 20,
  },
  description: {
    ...kstyles.text,
    ...kstyles.textWhite,
    paddingRight: 80, // TODO should not be constant
  },
  bottomText: {
    ...kstyles.text,
    ...kstyles.textWhite,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default WelcomeScreen;

let config = {
  issuer: "https://accounts.google.com",
  scopes: ["openid", "profile"],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId:
    "39909900924-3encunjn5ts42gmaanva3thli128ibs7.apps.googleusercontent.com",
};

let StorageKey = "@MyApp:CustomGoogleOAuthKey";

export async function signInAsync() {
  let authState = await AppAuth.authAsync(config);
  await cacheAuthAsync(authState);
  console.log("signInAsync", authState);
  return authState;
}

async function cacheAuthAsync(authState) {
  return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

export async function getCachedAuthAsync() {
  let value = await AsyncStorage.getItem(StorageKey);
  let authState = JSON.parse(value);
  console.log("getCachedAuthAsync", authState);
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
  console.log("refreshAuth", authState);
  await cacheAuthAsync(authState);
  return authState;
}

export async function signOutAsync({ accessToken }) {
  try {
    await AppAuth.revokeAsync(config, {
      token: accessToken,
      isClientIdProvided: true,
    });
    await AsyncStorage.removeItem(StorageKey);
    return null;
  } catch (e) {
    alert(`Failed to revoke token: ${e.message}`);
  }
}
