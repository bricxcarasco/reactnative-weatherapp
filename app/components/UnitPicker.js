import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

const UnitPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(itemSelected) => setUnitSystem(itemSelected)}
        itemStyle={styles.itemSTyle}
        mode="dropdown"
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
  itemSTyle: {
    fontSize: 12,
  },
});

export default UnitPicker;
