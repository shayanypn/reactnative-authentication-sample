import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import kstyles from "../../kstyles";

const AppTextInput = ({ width = "100%", ...otherProps }) => (
  <View style={[styles.container, { width }]}>
    <TextInput
      placeholderTextColor={kstyles.gray}
      style={kstyles.dark}
      {...otherProps}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: kstyles.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
});

export default AppTextInput;
