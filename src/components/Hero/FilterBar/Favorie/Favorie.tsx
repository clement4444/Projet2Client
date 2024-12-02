import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";
import "./Favorie.css";

interface FavorieProps {
  likeChecked: boolean;
  setLikeChecked: (checked: boolean) => void;
}

const Favorie: React.FC<FavorieProps> = ({ likeChecked, setLikeChecked }) => {
  //le bakOffice
  const { bakOffice } = UseBakOfficeContext();

  function afficherFilterFavorite() {
    if (bakOffice?.compteConnecter !== null) {
      return (
        <div className="filterLikeContener">
          <p className="filterlikeName">❤️</p>
          <input
            className="filterlikeInput"
            type="checkbox"
            checked={likeChecked} // L'état de la case à cocher
            onChange={(event) => setLikeChecked(event.target.checked)}
          />
        </div>
      );
    }
    return null;
  }

  return <div>{afficherFilterFavorite()}</div>;
};

export default Favorie;
