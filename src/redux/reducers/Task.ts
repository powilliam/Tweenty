import { Task } from "../../models/Task";

interface Action {
  type: string;
  newState: State;
}

export interface State {
  uncompleted: Task[];
  archived: Task[];
}

const initialState: State = {
  uncompleted: [],
  archived: [],
};

export function TaskReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "UPDATE_STATE":
      return action.newState;
    default:
      return state;
  }
}
