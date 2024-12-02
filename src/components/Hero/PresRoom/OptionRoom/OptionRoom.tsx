import IconOption from "./IconOption/IconOption";
import "./OptionRoom.css";

const OptionRoom = () => {
  return (
    <div className="roomOption">
      <IconOption numeros={0} />
      <IconOption numeros={1} />
      <IconOption numeros={2} />
      <IconOption numeros={3} />
    </div>
  );
};

export default OptionRoom;
