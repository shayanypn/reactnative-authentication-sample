import React from "react";
import { StyleSheet, ScrollView, View, Text, Alert } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import * as Yup from "yup";
import { loginWithEmail } from "../services/Firebase";
import Screen from "../components/Screen";
import AppButton from "../components/Button";
import { Form, FormField, SubmitButton } from "../components/Form";
import kstyles from "../kstyles";

const sliderImages = [
  "https://dummyimage.com/400x600/9399a5/000000",
  "https://dummyimage.com/400x600/9399a5/000000",
  "https://dummyimage.com/400x600/9399a5/000000",
];

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});

const SigninTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Welcome back</Text>
    <Text style={kstyles.textGray}>Login to your account</Text>
  </View>
);

const SigninForm = ({ loading, onSubmit }) => (
  <View style={styles.formContainer}>
    <Form
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      <View>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton loading={loading} title="Login" />
      </View>
    </Form>
  </View>
);

const SigninBottom = () => (
  <View style={styles.forgetContainer}>
    <Text style={styles.forgetTitle}>Forgot your password?</Text>
    <View style={styles.btnSignup}>
      <Text style={kstyles.textGray}>Don't have an account?</Text>
      <Text style={styles.btnSignupTextSignup}> Sign up</Text>
    </View>
  </View>
);

const SigninScreen = ({ navigation }) => {
  const [sliderHeight, setSliderHeight] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  async function handleOnLogin(values) {
    const { email, password } = values;
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      setLoading(false);
      navigation.navigate("Panel");
    } catch (error) {
      // The simplest way of showing error.
      // of course we should create a mapper to
      // extract user friendly text for each error
      // then show it to user
      Alert.alert("Sign in problem", error.message, [{ text: "OK" }], {
        cancelable: false,
      });
      setLoading(false);
    }
  }

  return (
    <Screen style={kstyles.bgGray}>
      <AppButton
        title=" "
        icon="arrow-left"
        style={styles.headBack}
        onPress={() => navigation.navigate("Home")}
      />
      <View
        style={styles.head}
        onLayout={(e) => setSliderHeight(e.nativeEvent.layout.height)}
      >
        <SliderBox
          images={sliderImages}
          sliderBoxHeight={sliderHeight}
          autoplay
        />
      </View>
      <View style={styles.foot}>
        <ScrollView>
          <SigninTitle />
          <SigninForm loading={loading} onSubmit={handleOnLogin} />
          <SigninBottom />
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  head: {
    flex: 5,
    justifyContent: "center",
    alignItems: "stretch",
  },
  headBack: {
    position: "absolute",
    top: 25,
    left: 10,
    justifyContent: "flex-start",
    padding: 0,
    zIndex: 10,
  },
  foot: {
    flex: 7,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
    backgroundColor: kstyles.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
    marginBottom: 30,
  },
  formContainer: {
    flex: 7,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  forgetContainer: {
    flex: 2,
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
  btnSignup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  btnSignupTextSignup: {
    ...kstyles.text,
    color: kstyles.green,
    fontWeight: "bold",
  },
});

export default SigninScreen;
