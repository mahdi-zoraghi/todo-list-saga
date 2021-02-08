import { ListGroup, Jumbotron } from "react-bootstrap"
import { useSelector } from "react-redux"

import ToDo from "../components/ToDo"

const ToDoList = ({ loadToDoList }) => {
  const toDoList = useSelector(state => state.toDoList)
  return (
    <Jumbotron>
      <ListGroup>
        {toDoList.map((toDo, index) => (
          <ToDo key={index} {...toDo} />
        ))}
      </ListGroup>
    </Jumbotron>
  )
}

export default ToDoList
