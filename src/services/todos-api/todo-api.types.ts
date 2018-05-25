import { GeneralApiProblem } from "./todo-api-problem"
import { ToDoSnapshot } from "../../models/to-do/to-do"

export type GetToDosResult = { kind: "ok"; todos: ToDoSnapshot[] } | GeneralApiProblem
