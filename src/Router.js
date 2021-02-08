import { Switch, Route } from "react-router-dom"

import GoogleBtn from "./pages/GoogleBtn"
import ToDoList from "./pages/ToDoList"
import AddToDo from "./pages/AddToDo"

const Router = () => (
  <Switch>
    <Route exact path="/" component={ToDoList} />
    <Route exact path="/new-item" component={AddToDo} />
    <Route exact path="/login-google" component={GoogleBtn} />
  </Switch>
)

export default Router
