import * as React from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"

export default class DrawerScreen2 extends React.Component {
  static IMAGE = require("./illustration_screen2.png")
  static BACKGROUND = require("./bg-gradient.png")

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={DrawerScreen2.BACKGROUND}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Image source={DrawerScreen2.IMAGE} style={styles.image} />
          <Text style={styles.screenLabel}>SCREEN TWO</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    marginHorizontal: "10%",
    paddingTop: 180,
  },
  image: {
    marginHorizontal: 82,
    marginBottom: 40,
  },
  screenLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 28,
  },
})
