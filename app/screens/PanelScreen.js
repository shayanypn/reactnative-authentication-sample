import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
} from "react-native";
import Constants from "expo-constants";
import AppButton from "../components/Button";
import kstyles from "../kstyles";
import StarRank from "../components/StarRank";

const PanelStatics = () => (
  <View style={styles.headStatic}>
    <View style={styles.headStaticBox}>
      <Text style={styles.headStaticTitle}>Difficulty</Text>
      <StarRank value={3} />
    </View>
    <View style={styles.headStaticBox}>
      <Text style={styles.headStaticTitle}>Iterations</Text>
      <Text style={styles.headStaticContent}>10 Sätze</Text>
    </View>
    <View style={styles.headStaticBox}>
      <Text style={styles.headStaticTitle}>Duration</Text>
      <Text style={styles.headStaticContent}>15 Minuten</Text>
    </View>
  </View>
);

const PanelDescription = () => (
  <View style={styles.description}>
    <Text style={kstyles.textLightDark}>Description</Text>
    <Text style={styles.descriptionText}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </Text>
  </View>
);

const PanelScreen = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView>
      <ImageBackground source={require("../assets/bg.png")} style={styles.head}>
        <AppButton
          title="Back"
          icon="chevron-left"
          style={styles.headBack}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.headTitle}>Child’s pose</Text>
        <PanelStatics />
        <View style={styles.btnList}>
          <AppButton
            title="Play video"
            icon="play-circle"
            smallIcon
            lessRadius
            bgColor={kstyles.secondary}
          />
          <AppButton
            title="Mark as done"
            icon="check-circle"
            smallIcon
            lessRadius
            bgColor={kstyles.green}
          />
        </View>
      </ImageBackground>
      <PanelDescription />
      <View style={styles.attachments}>
        <Text style={kstyles.textLightDark}>Attachments</Text>
        <View style={styles.attachmentsRow}>
          <Image
            style={styles.attachmentsImage}
            source={require("../assets/image.jpg")}
          />
          <Image
            style={styles.attachmentsImage}
            source={require("../assets/image.jpg")}
          />
        </View>
        <View style={styles.attachmentsRow}>
          <Image
            style={styles.attachmentsImage}
            source={require("../assets/image.jpg")}
          />
          <Image
            style={styles.attachmentsImage}
            source={require("../assets/image.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    justifyContent: "flex-end",
    alignItems: "stretch",
    resizeMode: "contain",
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
  headBack: {
    position: "absolute",
    top: 25,
    left: 10,
    justifyContent: "flex-start",
    padding: 0,
  },
  headStatic: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  headStaticBox: {
    width: "30%",
  },
  headStaticTitle: {
    ...kstyles.text,
    fontSize: 10,
    color: kstyles.lighterDark,
    marginBottom: 3,
  },
  headStaticContent: {
    ...kstyles.text,
    fontSize: 14,
    color: kstyles.white,
  },
  btnList: {
    display: "flex",
    flexDirection: "column",
  },
  description: {
    display: "flex",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  descriptionTitle: {
    ...kstyles.text,
    color: kstyles.lightDark,
    marginBottom: 8,
  },
  headTitle: {
    ...kstyles.textH3,
    marginBottom: 20,
    marginTop: 200,
  },
  attachments: {
    display: "flex",
    padding: 20,
    alignItems: "stretch",
    flex: 1,
  },
  attachmentsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  attachmentsImage: {
    width: "47%",
    borderRadius: 8,
  },
});

export default PanelScreen;
