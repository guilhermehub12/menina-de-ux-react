import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useForm } from "@formspree/react";
import { Modal, Button, FormLabel } from "react-bootstrap";
import "./ContatoForm.css";

function ContatoForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Por favor, informe seu nome"),
    email: Yup.string()
      .email("Por favor, informe um endereço de email válido")
      .required("Por favor, informe seu endereço de email"),
    message: Yup.string().required("Por favor, escreva uma mensagem"),
  });

  const [state, handleSubmit] = useForm("xdovgyay");
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (values, actions) => {
    handleSubmit(values);
    setShowModal(true);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className="contact-form"
            name="contato"
            method="POST"
            data-netlify="true"
          >
            <h1>Contate-nos</h1>
            <input type="hidden" name="form-name" value="contato" />
            <div className="form-group">
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Field
                className={`form-control ${
                  errors.name && touched.name ? "is-invalid" : ""
                }`}
                name="name"
                id="name"
                placeholder="Digite seu nome"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field
                className={`form-control ${
                  errors.email && touched.email ? "is-invalid" : ""
                }`}
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <Field
                className={`form-control ${
                  errors.message && touched.message ? "is-invalid" : ""
                }`}
                name="message"
                id="message"
                as="textarea"
                rows={4}
                placeholder="Digite sua mensagem"
              />
              <ErrorMessage
                component="div"
                name="message"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Button type="submit" variant="primary">
                Enviar
              </Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Mensagem de {state.succeeded ? "sucesso" : "erro"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {state.succeeded
                  ? "Sua mensagem foi enviada com sucesso!"
                  : "Houve um erro ao enviar a mensagem. Tente novamente mais tarde."}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContatoForm;
