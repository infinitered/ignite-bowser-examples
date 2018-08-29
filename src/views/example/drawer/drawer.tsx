import * as React from "react"
import { Text, TextStyle, View, ViewStyle, Button } from "react-native"
import { observer } from "mobx-react"
import { DrawerItems } from "react-navigation"

const container: ViewStyle = {
  flex: 1,
  backgroundColor: "#f6f6f6",
  paddingTop: 40,
  paddingHorizontal: 20,
}

const uglyDrawerItem: any = {
  fontSize: 18,
  fontWeight: "bold",
  color: "#E73536",
  padding: 15,
  margin: 5,
  borderRadius: 2,
  borderColor: "#E73536",
  borderWidth: 1,
  textAlign: "center",
}

// export interface DrawerProps extends NavigationScreenProps<{
//   title: string,
//   navigation: any,
// }> {}

@observer
export class Drawer extends React.Component {
  props: any

  renderDrawerSection(route) {
    const { navigation } = this.props
    return (
      <View>
        <Button
          onPress={() => navigation.navigate(route)}
          // style={uglyDrawerItem}
          title={route}
        />
        {/* <Text>{route}</Text> */}
      </View>
    )
  }

  // render() {
  //   const { navigation } = this.props
  //   return (
  //     <View style={container}>
  //       {/* <Button
  //         onPress={() => navigation.navigate("screen1")}
  //         title={"screen1"}
  //       />
  //       <Button
  //         onPress={() => navigation.navigate("screen2")}
  //         title={"screen2"}
  //       />
  //       <Button
  //         onPress={() => navigation.navigate("screen3")}
  //         title={"screen3"}
  //       /> */}
  //       {/* {this.renderDrawerSection("screen1")}
  //       {this.renderDrawerSection("screen2")}
  //       {this.renderDrawerSection("screen3")} */}
  //       {/* <DrawerItems {...this.props} /> */}
  //     </View>
  //   )
  // }
}
