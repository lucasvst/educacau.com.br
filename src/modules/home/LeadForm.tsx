import { useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"

const postForm = async (form: any) => {

  const formData = new FormData(form)

  await fetch("https://postlead-fzvtvl3bia-ue.a.run.app", {
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
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="p-4 p-md-5 border rounded-3 bg-light"
    >

      <Form.Group controlId="formName" className="form-floating mb-3">
        <FloatingLabel
          controlId="formName"
          label="Digite seu nome"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </FloatingLabel>
        <Form.Control.Feedback type="invalid">
          Por favor, digite seu nome.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhone" className="form-floating mb-3">
        <FloatingLabel
          controlId="formPhone"
          label="Digite seu WhatsApp"
          className="mb-3"
        >
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Digite seu WhatsApp"
            required
          />
        </FloatingLabel>
        <Form.Control.Feedback type="invalid">
          Por favor, digite seu telefone.
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="w-100 btn btn-lg btn-primary" variant="primary" type="submit">
        Tenho interesse!
      </Button>

      <hr className="my-4" />
      <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>

    </Form>
  )
}
