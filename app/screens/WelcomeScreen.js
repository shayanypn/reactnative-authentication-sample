import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Crypto from "expo-crypto";
import * as AppleAuthentication from "expo-apple-authentication";

import AppButton from "../components/Button";
import Screen from "../components/Screen";
import kstyles from "../kstyles";

const WelcomeScreen = ({ navigation }) => {
  const loginWithApple = async () => {
    const csrf = Math.random().toString(36).substring(2, 15);
    const nonce = Math.random().toString(36).substring(2, 10);
    const hashedNonce = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      nonce
    );
    const appleCredential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
      state: csrf,
      nonce: hashedNonce,
    });
    const { identityToken, email, state } = appleCredential;
    console.log(identityToken, email, state);
  };

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
          <AppButton
            title="Sign In with Apple"
            icon="apple"
            onPress={loginWithApple}
          />
          <AppButton
            title="Sign In with Google"
            bgColor={kstyles.primary}
            icon="google"
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
