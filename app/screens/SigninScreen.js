import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Screen from "../components/Screen";
import kstyles from "../kstyles";

const sliderImages = [
  "https://dummyimage.com/600x400/9399a5/000000",
  "https://dummyimage.com/600x400/9399a5/000000",
  "https://dummyimage.com/600x400/9399a5/000000",
];

const SigninTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Welcome back</Text>
    <Text style={styles.description}>Login to your account</Text>
  </View>
);

const SigninForm = () => <View style={styles.formContainer} />;

const SigninBottom = () => (
  <View style={styles.forgetContainer}>
    <Text style={styles.forgetTitle}>Forgot your password?</Text>
    <View style={styles.btnSignup}>
      <Text style={styles.btnSignupText}>Don't have an account?</Text>
      <Text style={styles.btnSignupTextSignup}> Sign up</Text>
    </View>
  </View>
);

const SigninScreen = () => (
  <Screen style={kstyles.bgGray}>
    <View style={styles.head}>
      <SliderBox images={sliderImages} />
    </View>
    <View style={styles.foot}>
      <SigninTitle />
      <SigninForm />
      <SigninBottom />
    </View>
  </Screen>
);

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
    backgroundColor: kstyles.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
  },
  formContainer: {
    flex: 6,
    backgroundColor: kstyles.primary,
    padding: 20,
    marginBottom: 20,
  },
  forgetContainer: {
    flex: 3,
    alignItems: "center",
  },
  forgetTitle: {
    ...kstyles.text,
    color: kstyles.black,
  },
  title: {
    ...kstyles.textH3,
    color: kstyles.dark,
  },
  description: {
    ...kstyles.text,
    color: kstyles.gray,
  },
  btnSignup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  btnSignupText: {
    ...kstyles.text,
    color: kstyles.gray,
  },
  btnSignupTextSignup: {
    ...kstyles.text,
    color: kstyles.green,
    fontWeight: "bold",
  },
});

export default SigninScreen;
