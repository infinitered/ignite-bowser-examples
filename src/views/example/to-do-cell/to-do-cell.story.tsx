import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { ToDoCell } from "./"
import { ToDoModel } from "../../../models/to-do/to-do"
import { Wallpaper } from "../../shared/wallpaper"

const todo = ToDoModel.create({ id: 1, title: "Do all the things!" })

storiesOf("ToDoCell")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <Wallpaper />
        <ToDoCell todo={todo} onToggle={todo.toggleIsComplete} />
      </UseCase>
      <UseCase text="Secondary" usage="Centered">
        <Wallpaper />
        <ToDoCell preset="secondary" todo={todo} onToggle={todo.toggleIsComplete} />
      </UseCase>
    </Story>
  ))
