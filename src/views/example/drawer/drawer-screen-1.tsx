import * as React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextStyle,
} from "react-native"

export default class DrawerScreen1 extends React.Component {
  render() {
    const image = require("./illustration_screen1.png")
    const background = require("./bg-gradient.png")
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Image source={image} style={styles.image} />
          <Text style={styles.screenLabel}>SCREEN ONE</Text>
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
