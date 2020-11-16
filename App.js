import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";

import Keys from "./app/config/keys";
import Color from "./app/constants/colors";

import WeatherInfo from "./app/components/WeatherInfo";
import UnitPicker from "./app/components/UnitPicker";
import ReloadIcon from "./app/components/ReloadIcon";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    loadMapFunction();
  }, [unitSystem]);

  const loadMapFunction = async () => {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app.");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const weatherUrl = `${Keys.BASE_WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${Keys.WEATHER_API_KEY}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherResponseJson = await weatherResponse.json();

      if (weatherResponse.ok) {
        setCurrentWeather(weatherResponseJson);
      } else {
        setErrorMessage(weatherResponseJson.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon loadMapFunction={loadMapFunction} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Color.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
