import * as React from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"

export default class DrawerScreen1 extends React.Component {
  render() {
    // const im = require("./illustration_screen1.png")
    const im = require("./bg-gradient.png")
    return (
      <View style={styles.container}>
        <ImageBackground
          source={im}
          style={styles.backgroundImage}
          // imageStyle={styles.image}
          // resizeMode="cover"
        >
          {/* <Image
            source={im}
            style={styles.image}
          /> */}
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: "50%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  image: {
    height: "20%",
    width: "56%",
  },
})
