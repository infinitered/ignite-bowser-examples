import { DrawerNavigator, DrawerItems } from "react-navigation"
import DrawerScreen1 from "../views/example/drawer/drawer-screen-1"
import DrawerScreen2 from "../views/example/drawer/drawer-screen-2"
import DrawerScreen3 from "../views/example/drawer/drawer-screen-3"
import { ScrollView, ViewStyle, View } from "react-native"

const drawerStyle: ViewStyle = {
  backgroundColor: "#5D2555",
}

const customDrawer = props => (
  <ScrollView style={drawerStyle}>
    <DrawerItems {...props} />
  </ScrollView>
)

export const DrawerScreens = DrawerNavigator(
  {
    screen1: { screen: DrawerScreen1 },
    screen2: { screen: DrawerScreen2 },
    screen3: { screen: DrawerScreen3 },
  },
  {
    contentComponent: customDrawer,
    contentOptions: {
      activeBackgroundColor: "#bada55",
      inactiveBackgroundColor: "#bada55",
    },
  },
)
