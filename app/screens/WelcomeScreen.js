import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import { getCachedAuthAsync, signInAsync } from "../services/AppAuth";
import kstyles from "../kstyles";

const WelcomeScreen = ({ navigation }) => {
  let [authState, setAuthState] = React.useState(null);

  async function handleGoogleSignIn() {
    const _authState = await signInAsync();
    // beside this validation I also should
    // check the result of google auth to see
    // if anything went well or not
    if (_authState.state !== "error") {
      navigation.navigate("Panel");
    }
  }

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
            onPress={handleGoogleSignIn}
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
