import { StackNavigator, DrawerNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"
import DrawerScreen1 from "../views/example/drawer/drawer-screen-1"
import DrawerScreen2 from "../views/example/drawer/drawer-screen-2"
import DrawerScreen3 from "../views/example/drawer/drawer-screen-3"

export const DrawerStack = DrawerNavigator(
  {
    screen1: { screen: DrawerScreen1 },
    screen2: { screen: DrawerScreen2 },
    screen3: { screen: DrawerScreen3 },
  },
  {
    // gesturesEnabled: false,
    // headerMode: "none",
    // navigationOptions: { gesturesEnabled: false },
  },
)

export const RootNavigator = StackNavigator(
  {
    exampleStack: { screen: ExampleNavigator },
    drawerStack: { screen: DrawerStack },
  },
  {
    headerMode: "none",
    initialRouteName: "drawerStack",
    navigationOptions: { gesturesEnabled: false },
  },
)
