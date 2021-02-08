import { ADD_TODO, RENDER_TODO_LIST, USER_LOGIN, USER_LOGOUT } from "./actions"

const initialState = {
  toDoList: [],
  user: {},
}

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
      }
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList,
      }
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ]
      return {
        ...state,
        toDoList: newToDoList,
      }
    default:
      return state
  }
}
