import { UseApiContext } from "../../../../hooks/UseApi";
import "./PriceTotalCard.css";

const PriceTotalCard = ({ index, nuit }: { index: number; nuit: number }) => {
  const { api } = UseApiContext();

  return (
    <div className="price-total-card">
      <p className="total-label">
        <strong>Total :</strong>
      </p>
      <p className="total-value">
        <strong>{api[index].prix_par_nuit * nuit}.00€</strong>
      </p>
    </div>
  );
};

export default PriceTotalCard;
