import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class DrawerScreen3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 3</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0ffee",
    alignItems: "center",
    justifyContent: "center",
  },
})
