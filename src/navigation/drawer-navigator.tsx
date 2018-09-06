import { DrawerNavigator } from "react-navigation"
import DrawerScreen1 from "../views/example/drawer/drawer-screen-1"
import DrawerScreen2 from "../views/example/drawer/drawer-screen-2"
import DrawerScreen3 from "../views/example/drawer/drawer-screen-3"
import DrawerContainer from "../views/example/drawer/drawer-container"

export const DrawerScreens = DrawerNavigator(
  {
    screen1: { screen: DrawerScreen1 },
    screen2: { screen: DrawerScreen2 },
    screen3: { screen: DrawerScreen3 },
  },
  {
    contentComponent: DrawerContainer,
  },
)
