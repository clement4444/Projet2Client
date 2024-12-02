import { UseApiContext } from "../../../../hooks/UseApi";
import "./PriceRoomCard.css";

const PriceRoomCard = ({ index, nuit }: { index: number; nuit: number }) => {
  const { api } = UseApiContext();

  const prix = api[index].prix_par_nuit * nuit * 0.8;
  const tva = api[index].prix_par_nuit * nuit * 0.2;

  return (
    <div className="price-room-card">
      <div className="contenerPrixRoom">
        <p className="text-price">Prix pour {nuit} nuits</p>
        <p className="price-prix">
          <strong>{prix.toFixed(2)}€</strong>
        </p>
      </div>
      <div className="contenerTva">
        <p>Tva (20%)</p>
        <p>{tva.toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default PriceRoomCard;
