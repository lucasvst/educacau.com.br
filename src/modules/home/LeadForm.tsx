import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const postForm = (form: any) => {
  fetch("url", {
    method: "POST",
    body: form,
  })
}

export function LeadForm () {

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: any) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu nome"
          required
        />
        <Form.Control.Feedback type="invalid">
          Por favor, digite seu nome.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Digite seu telefone"
          required
        />
        <Form.Control.Feedback type="invalid">
          Por favor, digite seu telefone.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>

    </Form>
  )
}
