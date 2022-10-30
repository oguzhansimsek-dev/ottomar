//* Style files
import "./index.scss";

import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
const ContactForm = () => {
  return (
    <section>
      <div className="form-title">
        <h2>İletişim Formu</h2>
      </div>
      <Form>
        <FormGroup>
          <Input id="name" name="name" placeholder="Adınız:" type="text" />
        </FormGroup>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="E-posta adresiniz:"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="message"
            name="text"
            type="textarea"
            placeholder="Mesajınız: "
            rows="6"
            style={{ minHeight: "150px" }}
          />
        </FormGroup>
        <Button color="success" className="px-4">
          Devam
        </Button>
      </Form>
    </section>
  );
};
export default ContactForm;
