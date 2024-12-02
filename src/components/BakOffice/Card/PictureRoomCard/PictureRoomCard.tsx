import "./PictureRoomCard.css";
import { UseApiContext } from "../../../../hooks/UseApi";

const PictureRoomCard = ({ index }: { index: number }) => {
  const { api } = UseApiContext();
  return (
    <>
      <img src={api[index].image_url} alt="Room" className="room-image-Card" />
    </>
  );
};

export default PictureRoomCard;
