import React from "react"
import { Form, Button } from "react-bootstrap"

const SubscribeWidget = props => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email address" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Form>
  )
}

export default SubscribeWidget
