import DateReservationCard from "./DateReservationCard/DateReservationCard";
import NameRoomCard from "./NameRoomCard/NameRoomCard";
import NbBedRoomCard from "./NbBedRoomCard/NbBedRoomCard";
import NbpersonneCard from "./NbpersonneCard/NbpersonneCard";
import OptionRoomCard from "./OptionRoomCard/OptionRoomCard";
import PictureRoomCard from "./PictureRoomCard/PictureRoomCard";
import PriceTotalCard from "./PriceTotalCard/PriceTotalCard";
import SeparatorCard from "./SeparatorCard/SeparatorCard";
import PriceRoomCard from "./priceRoomCard/priceRoomCard";
import "./Card.css";

const Card = ({
  index,
  nuit,
  arriver,
  depart,
}: { index: number; nuit: number; arriver: string; depart: string }) => {
  return (
    <div className="card">
      <div className="section1">
        <div className="contenerInfoCard">
          <NbBedRoomCard index={index} />
          <NameRoomCard index={index} />
          <p className="LocalisationCard">Strasbourg, France</p>
        </div>
        <PictureRoomCard index={index} />
      </div>
      <SeparatorCard />
      <div className="contenerDateReservation">
        <DateReservationCard nuit={nuit} arriver={arriver} depart={depart} />
        <NbpersonneCard index={index} />
      </div>
      <SeparatorCard />
      <div className="contenerPrix">
        <PriceRoomCard index={index} nuit={nuit} />
        <PriceTotalCard index={index} nuit={nuit} />
      </div>
      <div className="contenerInclus">
        <OptionRoomCard index={index} />
      </div>
    </div>
  );
};

export default Card;
