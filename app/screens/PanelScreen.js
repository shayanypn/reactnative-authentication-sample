import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import kstyles from "../kstyles";
import StarRank from "../components/StarRank";

const PanelScreen = () => (
  <Screen>
    <ImageBackground source={require("../assets/bg.png")} style={styles.head}>
      <Text style={styles.headTitle}>Child’s pose</Text>
      <View style={styles.headStatic}>
        <View>
          <Text style={styles.headStaticTitle}>Difficulty</Text>
          <StarRank value={3} />
        </View>
        <View>
          <Text style={styles.headStaticTitle}>Iterations</Text>
          <Text style={styles.headStaticContent}>10 Sätze</Text>
        </View>
        <View>
          <Text style={styles.headStaticTitle}>Duration</Text>
          <Text style={styles.headStaticContent}>15 Minuten</Text>
        </View>
      </View>
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
    <View style={styles.foot}>
      <AppButton title="Sign In with Apple" icon="apple" />
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  head: {
    flex: 7,
    justifyContent: "flex-end",
    alignItems: "stretch",
    resizeMode: "contain",
    padding: 10,
  },
  foot: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headTitle: {
    ...kstyles.textH3,
    marginBottom: 20,
  },
  headStatic: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  headStaticTitle: {
    ...kstyles.text,
    fontSize: 10,
    color: kstyles.lightDark,
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
});

export default PanelScreen;
