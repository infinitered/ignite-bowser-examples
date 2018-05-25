import { types, getEnv, getRoot } from "mobx-state-tree"
import { ToDoModel, ToDo, ToDoSnapshot } from "../to-do/to-do"
import { flow } from "mobx"
import { Environment } from "../environment"
import { RootStore } from "../root-store"

/**
 * Store which holds the items found on the to-do-list screen
 *
 * The `mobx-state-tree` model used to create `ToDoListStore` instances
 * as well as including as props in other `mobx-state-tree` models.
 */
export const ToDoListStoreModel = types
  .model("ToDoListStore")
  .props({
    /**
     * The status of the API request
     */
    status: types.optional(types.enumeration([ "idle", "pending", "done", "error"]), "idle"),
    /**
     * A list of TODOS
     */
    todos: types.optional(types.array(ToDoModel), []),
  })
  // Setters
  .actions(self => ({
    setStatus(value?:  "idle" | "pending" | "done" | "error") {
      self.status = value
    },
    setToDos(value: ToDo[] | ToDoSnapshot[]) {
      if (self.todos) {
        if (value) {
          self.todos.replace(value as any)
        } else {
          self.todos.clear()
        }
      } else {
        self.todos = value as any
      }
    },
  }))
  .views(self => ({
    get environment() {
      return getEnv(self) as Environment
    },
    get rootStore() {
      return getRoot(self) as RootStore
    },
    get isLoading() {
      return self.status === "pending"
    },
  }))
  .actions(self => ({
    loadTodos: flow(function*() {
      self.setStatus("pending")
      try {
        const result = yield self.environment.todoApi.getTodos()

        if (result.kind === "ok") {
          self.setToDos(result.todos)
          self.setStatus("done")
        } else {
          self.setStatus("error")
        }
      } catch {
        self.setStatus("error")
      }
    }),
  }))
  .views(self => ({

  }))

type ToDoStoreType = typeof ToDoListStoreModel.Type
export interface ToDoStore extends ToDoStoreType {}
