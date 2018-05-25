import { types } from "mobx-state-tree"

/**
 * A TODO list item
 */
export const ToDoModel = types
  .model("ToDo")
  .props({
    /**
     * A unique identifier for this todo
     */
    id: types.identifier(types.number),

    /**
     * The main title of this todo. Ex: "Buy cat food"
     */
    title: types.string,

    /**
     * Boolean indicating whether this item is complete or not. Default is false.
     */
    isComplete: types.optional(types.boolean, false),
  })
  // setters
  .actions(self => ({
    setId(value: number) {
      self.id = value
    },
    setTitle(value: string) {
      self.title = value
    },
    toggleIsComplete() {
      self.isComplete = !self.isComplete
    },
  }))

type ToDoType = typeof ToDoModel.Type
export interface ToDo extends ToDoType {}
type ToDoSnapshotType = typeof ToDoModel.SnapshotType
export interface ToDoSnapshot extends ToDoSnapshotType {}
