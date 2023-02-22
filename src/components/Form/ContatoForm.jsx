import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  const onSubmit = async ({ resetForm }) => {
    setTimeout(() => {
      resetForm();
      alert("Obrigado pelo seu contato! Responderemos em breve.");
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form name="contato" method="POST" netlify >
          <input type="hidden" name="form-name" value="contato" />
          <div className="form-group">
            <label htmlFor="name">Nome</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Mensagem</label>
            <Field
              className={`form-control ${
                errors.message && touched.message ? "is-invalid" : ""
              }`}
              name="message"
              id="message"
              as="textarea"
              rows={5}
              placeholder="Digite sua mensagem"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContatoForm;
