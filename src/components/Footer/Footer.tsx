import Carte from "./Carte/Carte";
import Contact from "./Contact/Contact";
import Info from "./Info/Info";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Info />
      <div className="footerGauche">
        <Contact />
        <Carte />
      </div>
    </footer>
  );
}

export default Footer;
