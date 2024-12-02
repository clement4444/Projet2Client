import { useState } from "react";
import "./BoutonEnvoyer.css";

function BoutonEnvoyer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <button className="bouton-envoyer" type="button" onClick={handleClick}>
        ENVOYER
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Votre message a bien été envoyé !</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BoutonEnvoyer;
