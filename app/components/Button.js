import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import kstyles from "../kstyles";

const AppButton = ({ title, onPress, style, bgColor, icon }) => (
  <TouchableOpacity
    style={[styles.btn, style, { backgroundColor: bgColor }]}
    onPress={onPress}
  >
    {icon && (
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={kstyles.white}
        style={styles.icon}
      />
    )}
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "100%",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: kstyles.white,
    ...kstyles.text,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppButton;
