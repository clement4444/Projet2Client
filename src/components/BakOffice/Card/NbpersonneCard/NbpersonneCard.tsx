import { UseApiContext } from "../../../../hooks/UseApi";
import "./NbpersonneCard.css";

const NbpersonneCard = ({ index }: { index: number }) => {
  const { api } = UseApiContext();

  return (
    <>
      <p className="NbpersonneCard">{api[index].capacite} personnes</p>
    </>
  );
};

export default NbpersonneCard;
