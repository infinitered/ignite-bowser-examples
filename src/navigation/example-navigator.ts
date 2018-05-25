import { StackNavigator } from "react-navigation"
import { IndexScreen } from "../views/example/index-screen"
import { ToDoListScreen } from "../views/example/to-do-list"

export const ExampleNavigator = StackNavigator({
  index: { screen: IndexScreen },
  toDoList: { screen: ToDoListScreen },
},
{
  headerMode: "none",
})
