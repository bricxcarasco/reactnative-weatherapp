import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Color from "../constants/colors";

const ReloadIcon = ({ loadMapFunction }) => {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.main}>
      <Ionicons
        onPress={loadMapFunction}
        name={reloadIconName}
        size={24}
        color={Color.PRIMARY_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default ReloadIcon;
