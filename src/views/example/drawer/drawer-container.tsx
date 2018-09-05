import * as React from "react"
import { StyleSheet, ScrollView, View, ViewStyle } from "react-native"
import { Button } from "../../shared/button"

export interface DrawerContainerProps {
  navigation: any
}

export interface DrawerContainerState {
  screen: number
}

export default class DrawerContainer extends React.Component<
  DrawerContainerProps,
  DrawerContainerState
> {
  state = {
    screen: 1,
  }

  onPressHandler(_screen) {
    const { navigation } = this.props
    return () => {
      this.setState({
        screen: _screen,
      })
      navigation.navigate("screen" + _screen)
    }
  }

  activeButtonStyle(activeScreen) {
    const { screen } = this.state
    return screen == activeScreen
      ? {
          borderLeftColor: "#FF3A3A",
        }
      : {}
  }

  renderButton(screen) {
    const baseDrawerButton: ViewStyle = {
      borderRadius: 0,
      marginVertical: 15,
      paddingLeft: 30,
      borderLeftWidth: 4,
      borderLeftColor: "#00000000",
    }

    return (
      <Button
        preset="link"
        style={{
          ...baseDrawerButton,
          ...this.activeButtonStyle(screen),
        }}
        onPress={this.onPressHandler(screen)}
        text={"Screen " + screen}
      />
    )
  }

  renderButtons() {
    return (
      <View>
        {this.renderButton(1)}
        {this.renderButton(2)}
        {this.renderButton(3)}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderButtons()}</ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D2555",
    paddingTop: 40,
  },
})
