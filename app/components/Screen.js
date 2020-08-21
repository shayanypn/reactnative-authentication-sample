import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

const Screen = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
