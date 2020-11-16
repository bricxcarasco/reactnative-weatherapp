import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Keys from "../config/keys";
import Color from "../constants/colors";

const WeatherInfo = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconUrl = `${Keys.ICON_WEATHER_URL}${icon}@4x.png`;
  return (
    <View style={styles.main}>
      <Text>{name}</Text>
      <Image style={styles.icon} source={{ uri: iconUrl }} />
      <Text style={styles.primary_text}>{temp}°</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.secondary_text}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    textTransform: "capitalize",
  },
  primary_text: {
    fontSize: 40,
    color: Color.PRIMARY_COLOR,
  },
  secondary_text: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: Color.SECONDARY_COLOR,
  },
});

export default WeatherInfo;
