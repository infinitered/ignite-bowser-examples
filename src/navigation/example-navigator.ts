import { DrawerNavigator, StackNavigator } from "react-navigation"
import { IndexScreen } from "../views/example/index-screen"
import { ToDoListScreen } from "../views/example/to-do-list"
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
    initialRouteName: "screen1",
  },
)

export const ExampleNavigator = StackNavigator(
  {
    index: { screen: IndexScreen },
    toDoList: { screen: ToDoListScreen },
    drawerStack: { screen: DrawerStack },
  },
  {
    headerMode: "none",
  },
)
