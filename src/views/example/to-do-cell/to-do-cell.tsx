import * as React from "react"
import { View } from "react-native"
import { Text } from "../../shared/text"
import { viewPresets } from "./to-do-cell.presets"
import { ToDoCellProps } from "./to-do-cell.props"
import { Checkbox } from "../../shared/checkbox"
import { observer } from "mobx-react"

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
@observer
export class ToDoCell extends React.Component<ToDoCellProps, null> {
  render() {
    // grab the props
    const { preset = "primary", style: styleOverride, todo, onToggle, ...rest } = this.props

    // assemble the style
    const viewPresetToUse = viewPresets[preset] || viewPresets.primary

    const viewStyle = { ...viewPresetToUse, ...styleOverride }

    return (
      <View style={viewStyle} {...rest} >
        <Checkbox onToggle={onToggle} value={todo.isComplete} />
        <Text text={todo.title} />
      </View>
    )
  }
}
