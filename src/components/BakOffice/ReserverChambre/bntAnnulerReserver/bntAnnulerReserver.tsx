import "./bntAnnulerReserver.css";
import { useNavigate } from "react-router-dom";

const bntAnnulerReserver = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bntAnnulerReserve"
        type="button"
        onClick={() => navigate("/")}
      >
        ANNULER
      </button>
    </div>
  );
};

export default bntAnnulerReserver;
