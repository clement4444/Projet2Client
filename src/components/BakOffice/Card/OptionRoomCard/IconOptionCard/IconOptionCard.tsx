import "./IconOptionCard.css";

const IconOptionCard = ({ option }: { option: string }) => {
  return (
    <div className="contenerIcon">
      <li className="IconCadre">{option}</li>
    </div>
  );
};

export default IconOptionCard;
