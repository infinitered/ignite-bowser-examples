import * as React from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"

export default class DrawerScreen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen Two",
  }

  render() {
    const im = require("./illustration_screen2.png")
    const bg = require("./bg-gradient.png")
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bg}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Image source={im} style={styles.image} />
          <Text style={styles.screenLabel}>Screen 2</Text>
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
  },
})
