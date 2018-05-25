import { ViewStyle, ViewProperties } from "react-native"
import { ToDoCellPresetNames } from "./to-do-cell.presets"
import { ToDo } from "../../../models/to-do/to-do"

export interface ToDoCellProps extends ViewProperties {
  /**
   * The ToDo being rendered
   */
  todo: ToDo

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of text presets.
   */
  preset?: ToDoCellPresetNames

  /**
   * What happens when you toggle the checkbox
   */
  onToggle?(): void
}
