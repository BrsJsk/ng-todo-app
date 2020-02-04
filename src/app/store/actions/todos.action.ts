import { Action } from "@ngrx/store";
import { ITodo } from "src/app/models/todo.interface";

export const LOAD_TODOS = "[TODO] Load todos";
export const LOAD_TODOS_FAIL = "[TODO] Load todos fail";
export const LOAD_TODOS_SUCCESS = "[TODO] Load todos success";

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: ITodo[]) {}
}

export type TodosAction = LoadTodos | LoadTodosFail | LoadTodosSuccess;
