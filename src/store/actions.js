export const ADD_TODO = "ADD_TODO"
export const LOAD_TODO_LIST = "LOAD_TODO_LIST"
export const RENDER_TODO_LIST = "RENDER_TODO_LIST"

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const addToDo = title => ({
  type: ADD_TODO,
  toDoItem: {
    _id: new Date().getTime(),
    title,
  },
})

export const userLogIn = userImformation => ({
  type: USER_LOGIN,
  user: userImformation,
})

export const userLogOut = () => ({
  type: USER_LOGOUT,
})

export const loadToDoList = () => ({
  type: LOAD_TODO_LIST,
})
