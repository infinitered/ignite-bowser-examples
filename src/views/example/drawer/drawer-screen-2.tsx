import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class DrawerScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bada55",
    alignItems: "center",
    justifyContent: "center",
  },
})
