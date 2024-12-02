import { useState } from "react";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";

interface InscriptionProps {
  SetpageInscription: (value: boolean) => void;
}

const Inscription: React.FC<InscriptionProps> = ({ SetpageInscription }) => {
  //charger le contexte de bakoffice
  const { bakOffice, setBakOffice } = UseBakOfficeContext();

  //set les states
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motdePasse, setMotdePasse] = useState("");
  const [codePostal, SetCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [adresse, setAdresse] = useState("");

  function verifDoubleMail() {
    return bakOffice?.compte
      ? bakOffice.compte.some((compte) => compte.mail === mail)
      : false;
  }

  function inscription() {
    if (mail !== "" && motdePasse !== "") {
      if (bakOffice) {
        // Vérifier si un compte avec cet email existe
        if (!verifDoubleMail()) {
          setBakOffice({
            ...bakOffice,
            compte: [
              ...bakOffice.compte,
              {
                mail: mail,
                password: motdePasse,
                sex: sexe,
                prenom: prenom,
                nom: nom,
                adresse: adresse,
                telephone: telephone,
                codePostal: Number.parseInt(codePostal),
                ville: ville,
                reservation: [],
                favorite: [],
              },
            ],
          });
          SetpageInscription(false);
        } else {
          alert("ce compte existe déjà");
        }
      }
    } else {
      alert("veuillez remplir toute les informations");
    }
  }

  return (
    <div>
      <p>INSCRIPTION</p>
      <form>
        {/* sex */}
        <label>
          <input
            type="radio"
            name="gender"
            value="M"
            onChange={(e) => setSexe(e.target.value)}
          />
          M.
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Mme"
            onChange={(e) => setSexe(e.target.value)}
          />
          Mme
        </label>
        {/* prénom */}
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        {/* nom */}
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        {/* mail */}
        <input
          type="mail"
          placeholder="adresse mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        {/* telephone */}
        <input
          type="tel"
          placeholder="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        {/* mot de passe */}
        <input
          type="text"
          placeholder="Mot de passe"
          value={motdePasse}
          onChange={(e) => setMotdePasse(e.target.value)}
        />

        {/* adresse */}
        <input
          type="text"
          placeholder="adresse"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />

        {/* code postal */}
        <input
          type="text"
          placeholder="code postal"
          value={codePostal}
          onChange={(e) => SetCodePostal(e.target.value)}
        />

        {/* ville */}
        <input
          type="text"
          placeholder="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        {/* bouton suivant */}
        <button type="button" onClick={() => inscription()}>
          suivant
        </button>
      </form>
      <button type="button" onClick={() => SetpageInscription(false)}>
        Annuler
      </button>
    </div>
  );
};

export default Inscription;
