import { UseApiContext } from "../../../../hooks/UseApi";
import IconOptionCard from "./IconOptionCard/IconOptionCard";
import "./OptionRoomCard.css";

const OptionRoomCard = ({ index }: { index: number }) => {
  const { api } = UseApiContext();

  return (
    <div className="option-room-card">
      <p className="titreOptionRoom">Inclus :</p>
      <div className="contenerOption">
        {api[index].equipements.map((option: string) => (
          <IconOptionCard option={option} key={option} />
        ))}
      </div>
    </div>
  );
};

export default OptionRoomCard;
