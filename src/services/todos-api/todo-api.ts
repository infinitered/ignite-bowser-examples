import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./todo-api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./todo-api-config"
import * as Types from "./todo-api.types"
import { isNil } from "ramda"
import { ToDoSnapshot } from "../../models/to-do/to-do"

/**
 * Manages all requests to the API.
 */
export class ToDoApi {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    try {

      this.apisauce = create({
        baseURL: this.config.url,
        timeout: this.config.timeout,
        headers: {
          Accept: "application/json",
        },
      })
    } catch (e) {
      console.tron.log(e.message)
    }
  }

  /**
   * Gets a list of repos.
   */
  async getTodos(completed?: boolean): Promise<Types.GetToDosResult> {
    // make the api call
    const params = isNil(completed) ? {} : { completed }
    const response: ApiResponse<any> = await this.apisauce.get(`/todos`, params)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const todos: ToDoSnapshot[] = response.data
      return { kind: "ok", todos }
    } catch {
      return { kind: "bad-data" }
    }
  }
}
