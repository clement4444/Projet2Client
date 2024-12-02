import InputEmail from "./InputEmail/InputEmail";
import InputMessage from "./InputMessage/InputMessage";
import InputNom from "./InputNom/InputNom";
import BoutonEnvoyer from "./boutonEnvoyer/BoutonEnvoyer";

import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>NOUS CONTACTER</h2>
      <div className="formulaire">
        <div>
          <InputNom />
          <InputEmail />
        </div>
        <InputMessage />
        <BoutonEnvoyer />
      </div>
    </div>
  );
}

export default Contact;
