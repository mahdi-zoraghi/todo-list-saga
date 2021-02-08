import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Form, InputGroup } from "react-bootstrap"

import { addToDo } from "../store/actions"

const AddToDo = () => {
  const [item, setItem] = useState("")
  const dispatch = useDispatch()

  const handelSubmitItem = e => {
    e.preventDefault()
    if (!item.trim()) return

    dispatch(addToDo(item))
    setItem("")
  }

  return (
    <Form onSubmit={handelSubmitItem}>
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an Item"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  )
}

export default AddToDo
