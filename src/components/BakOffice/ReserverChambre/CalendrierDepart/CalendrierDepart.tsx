import "./CalendrierDepart.css";

interface CalendrierDepartProps {
  depart: string;
  setDepart: (date: string) => void;
}

const CalendrierDepart: React.FC<CalendrierDepartProps> = ({
  depart,
  setDepart,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepart(e.target.value);
  };

  return (
    <div className="depart">
      <div className="departInput">
        <input
          type="date"
          value={depart}
          onChange={handleDateChange}
          className="depart-date"
        />
        <img src="public/images/logoOption/calendrier.png" alt="Depart" />
      </div>
      <span>
        {typeof depart === "string" &&
          `${depart.slice(8, 10)}/${depart.slice(5, 7)}/${depart.slice(0, 4)}`}
      </span>
    </div>
  );
};

export default CalendrierDepart;
