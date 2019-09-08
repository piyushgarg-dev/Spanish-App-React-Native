import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Audio } from "expo-av";

const listBackgroundColors = {
  one: "#2475B0",
  two: "#26ae60",
  three: "#E74292",
  four: "#4834DF",
  five: "#1287A5",
  six: "#DFAF2B",
  seven: "#0A3D62",
  eight: "#53E0BC",
  nine: "#30336B",
  ten: "#AE1438"
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};

const soundKeys = Object.keys(soundList);
export default function App() {
  const playSound = async number => {
    const soundObject = new Audio.Sound();

    try {
      let path = soundList[number];

      await soundObject.loadAsync(path);
      await soundObject.playAsync();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />

        {soundKeys.map(key => (
          <View key style={styles.gridContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[key] }
              ]}
              onPress={() => playSound(key)}
            >
              <Text style={styles.itemText}>{key}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  gridContainer: {
    flex: 1,

    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "white",
    fontSize: 20
  }
});
