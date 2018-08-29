// import * as React from "react"
// import { StackNavigator } from "react-navigation"
// import { IndexScreen } from "../views/example/index-screen"
// import { ToDoListScreen } from "../views/example/to-do-list"
// import { View, Text, ViewStyle } from "react-native"

// export default class DrawerPiece extends React.Component<
//   { title: string },
//   {}
// > {
//   render() {
//     const container: ViewStyle = {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     }
//     return (
//       <View style={container}>
//         <Text>{this.props.title}</Text>
//       </View>
//     )
//   }
// }

// // const s1: DrawerPiece = new DrawerPiece({ title: "Screen 1" })

// export const DrawerNavigator = StackNavigator({
//   // screen1: { screen: s1 },
//   // screen2: { screen: screen("Screen 2") },
//   // screen3: { screen: screen("Screen 3") },
// })

// export const ExampleNavigator = StackNavigator(
//   {
//     index: { screen: IndexScreen },
//     toDoList: { screen: ToDoListScreen },
//     drawer: { screen: DrawerNavigator },
//   },
//   {
//     headerMode: "none",
//   },
// )
