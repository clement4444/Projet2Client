import "./ConnectionBnt.css";
import { UseBakOfficeContext } from "../../../hooks/UseBakOffice";

interface ConnectionBntProps {
  modalConnection: boolean;
  setmodalConnection: (value: boolean) => void;
}

const ConnectionBnt: React.FC<ConnectionBntProps> = ({
  modalConnection,
  setmodalConnection,
}) => {
  //importe le bakOfficeContext
  const { bakOffice, setBakOffice } = UseBakOfficeContext();

  //bouton de connection / déconection-------------------------------------
  function handleClickSeConnecter() {
    if (bakOffice?.compteConnecter === null) {
      setmodalConnection(!modalConnection);
    } else {
      if (bakOffice) {
        setBakOffice({
          ...bakOffice,
          compteConnecter: null,
        });
      }
    }
  }

  //fonction pour détérlminer le nom du bouton
  function buttonName() {
    if (bakOffice?.compteConnecter !== null) {
      return "Se déconnecter";
    }
    return "Se connecter";
  }

  function classNameButton() {
    if (bakOffice?.compteConnecter !== null) {
      return "navbar-btn hoverRed";
    }
    return "navbar-btn";
  }

  //balse p du compte connecter---------------------------------------------
  function afficherNomCompte() {
    if (bakOffice?.compteConnecter !== null) {
      return <p>{bakOffice?.compte[bakOffice.compteConnecter].mail}</p>;
    }
  }

  return (
    <div className="conterBntCompte">
      {/* bouton ce connecter */}
      <button
        className={classNameButton()}
        type="button"
        onClick={handleClickSeConnecter}
      >
        {buttonName()}
      </button>

      {/* nom du compte connecter */}
      {afficherNomCompte()}
    </div>
  );
};

export default ConnectionBnt;
