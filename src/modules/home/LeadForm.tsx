import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const postForm = async (form: any) => {

  const formData = new FormData(form)

  await fetch("https://us-east1-educacau-ae429.cloudfunctions.net/ext-http-export-sheets-saveRecord", {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": formData.get("name"),
      "phone": formData.get("phone"),
    }),
  })
}

export function LeadForm () {

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: any) => {

    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget

    if (form.checkValidity() === false) { return }

    setValidated(true)

    postForm(form)
  }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="name"
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
          name="phone"
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
