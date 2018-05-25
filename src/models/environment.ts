import { Reactotron } from "../services/reactotron"
import { Api } from "../services/api"
import { ToDoApi } from "../services/todos-api"

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  /**
   * Reactotron is only available in dev.
   */
  reactotron: Reactotron

  /**
   * Our api.
   */
  api: Api

  /**
   * Example To Do List Api
   */
  todoApi: ToDoApi
}
