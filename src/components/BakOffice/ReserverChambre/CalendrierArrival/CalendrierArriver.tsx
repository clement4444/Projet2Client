import "./CalendrierArriver.css";

interface CalendrierArriverProps {
  arriver: string;
  setArriver: (date: string) => void;
}

const CalendrierArriver: React.FC<CalendrierArriverProps> = ({
  arriver,
  setArriver,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArriver(e.target.value);
  };

  return (
    <div className="arriver">
      <div className="arriverInput">
        <input
          type="date"
          value={arriver}
          onChange={handleDateChange}
          className="arriver-date"
        />
        <img src="/images/logoOption/calendrier.png" alt="Arriver" />
      </div>
      <span>
        {typeof arriver === "string" &&
          `${arriver.slice(8, 10)}/${arriver.slice(5, 7)}/${arriver.slice(0, 4)}`}
      </span>
    </div>
  );
};

export default CalendrierArriver;
