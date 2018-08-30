import { StackNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = StackNavigator(
  {
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    initialRouteName: "exampleStack",
    navigationOptions: { gesturesEnabled: false },
  },
)
