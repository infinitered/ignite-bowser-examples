import * as React from "react"
import { View, ViewStyle, TextStyle, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { color, spacing } from "../../../theme"
import { Text } from "../../shared/text"
import { ToDoStore } from "../../../models/to-do-list-store/to-do-list-store"
import { inject } from "mobx-react"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[6],
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
  textAlign: "center",
}

export interface IndexScreenProps extends NavigationScreenProps<{}> {
  toDoStore: ToDoStore
}

@inject("toDoStore")
export class IndexScreen extends React.Component<IndexScreenProps, {}> {
  toDoList = () => {
    this.props.toDoStore.loadTodos()
    this.props.navigation.navigate("toDoList")
  }

  drawerScreen = () => {
    this.props.navigation.navigate("drawerStack")
  }

  render() {
    return (
      <View style={FULL}>
        <StatusBar barStyle="light-content" />
        <Wallpaper />
        <Screen
          style={CONTAINER}
          backgroundColor={color.transparent}
          preset="scrollStack"
        >
          <Text preset="header" text={"Examples"} style={HEADER} />
          <Button preset="link" onPress={this.toDoList} text={"ToDoList"} />
          <Button
            preset="link"
            onPress={this.drawerScreen}
            text={"DrawerScreen"}
          />
        </Screen>
      </View>
    )
  }
}
