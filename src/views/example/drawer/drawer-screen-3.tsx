import * as React from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"

export default class DrawerScreen3 extends React.Component {
  IMAGE = require("./illustration_screen3.png")
  BACKGROUND = require("./bg-gradient.png")

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={this.BACKGROUND}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Image source={this.IMAGE} style={styles.image} />
          <Text style={styles.screenLabel}>SCREEN THREE</Text>
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
