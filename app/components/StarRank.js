import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import kstyles from "../kstyles";

const rank = (num) => parseInt(num > 5 ? 5 : num, 10);
const arrayOf = (num) => [...Array(num).keys()];

const StarRank = ({ value, size }) => (
  <View style={styles.container}>
    {arrayOf(rank(value)).map(() => (
      <MaterialCommunityIcons
        name={"star"}
        size={size || 16}
        color={kstyles.orange}
      />
    ))}
    {arrayOf(5 - rank(value)).map(() => (
      <MaterialCommunityIcons
        name={"star"}
        size={size || 16}
        color={kstyles.darkOrange}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default StarRank;
