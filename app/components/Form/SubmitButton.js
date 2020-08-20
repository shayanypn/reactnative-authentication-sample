import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, ActivityIndicator } from "react-native";
import AppButton from "../Button";
import kstyles from "../../kstyles";

const SubmitButton = ({ title, loading }) => {
  const { handleSubmit } = useFormikContext();
  return loading ? (
    <ActivityIndicator style={styles.btn} size="large" />
  ) : (
    <AppButton
      title={title}
      bgColor={kstyles.secondary}
      style={styles.btn}
      onPress={handleSubmit}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
  },
});

export default SubmitButton;
