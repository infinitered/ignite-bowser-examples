import { types } from "mobx-state-tree"
import { NavigationStoreModel } from "../navigation-store"
import { ToDoListStoreModel } from "../to-do-list-store/to-do-list-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  toDoStore: types.optional(ToDoListStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
