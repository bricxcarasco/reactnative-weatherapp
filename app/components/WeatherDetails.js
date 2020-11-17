import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import Color from "../constants/colors";

const WeatherDetails = ({ currentWeather, unitSystem }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/hour`;

  return (
    <View style={styles.main}>
      <View style={styles.main_box}>
        <View style={{ ...styles.detail_box, ...styles.detail_box_right }}>
          <View style={styles.main_box}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={Color.PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text>Feels like</Text>
              <Text style={styles.secondaryText}>{feels_like} °</Text>
            </View>
          </View>
        </View>
        <View style={styles.detail_box}>
          <View style={styles.main_box}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={Color.PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text>Humidity</Text>
              <Text style={styles.secondaryText}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ ...styles.main_box, ...styles.main_box_border }}>
        <View style={{ ...styles.detail_box, ...styles.detail_box_right }}>
          <View style={styles.main_box}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={Color.PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text>Wind speed</Text>
              <Text style={styles.secondaryText}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.detail_box}>
          <View style={styles.main_box}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={Color.PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text>Pressure</Text>
              <Text style={styles.secondaryText}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR,
    borderRadius: 10,
  },
  main_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main_box_border: {
    borderTopWidth: 1,
    borderTopColor: Color.BORDER_COLOR,
  },
  detail_box: {
    flex: 1,
    padding: 20,
  },
  detail_box_right: {
    borderRightWidth: 1,
    borderRightColor: Color.BORDER_COLOR,
  },
  items: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  secondaryText: {
    fontSize: 15,
    color: Color.SECONDARY_COLOR,
    fontWeight: "700",
    marginTop: 7,
  },
});

export default WeatherDetails;
