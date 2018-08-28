import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react"

const container: ViewStyle = {
  flex: 1,
  backgroundColor: "#f6f6f6",
  paddingTop: 40,
  paddingHorizontal: 20,
}

const uglyDrawerItem: TextStyle = {
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

  renderDrawerSection = route => {
    const { navigation } = this.props
    return (
      <Text>
        onPress={() => navigation.navigate(route)}
        style={uglyDrawerItem}
      </Text>
    )
  }

  render() {
    return (
      <View style={container}>
        {this.renderDrawerSection("screen1")}
        {this.renderDrawerSection("screen2")}
        {this.renderDrawerSection("screen3")}
      </View>
    )
  }
}
