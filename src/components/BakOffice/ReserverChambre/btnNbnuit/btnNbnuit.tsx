import "./BtnNbnuit.css";
import calculerJoursEcarts from "../../../../hooks/calculerJoursEcarts";

const BtnNbnuit = ({
  depart,
  arriver,
}: { depart: string; arriver: string }) => {
  return (
    <div className="nuits">
      <p className="nbNuitEmoji">🌙</p>
      <p className="nbNuit">{calculerJoursEcarts(arriver, depart)} nuits</p>
    </div>
  );
};

export default BtnNbnuit;
