import { useState } from "react";
import "./FilterBar.css";
import Arrival from "./Arrival/Arrival";
import Departure from "./Departure/Departure";
import Favorie from "./Favorie/Favorie.tsx";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import appliFilter from "./appliFilter.tsx";

const FilterBar = () => {
  // state des option cocher
  const [optionCocher, setOptionCocher] = useState<string[]>([]);
  //state de la barre de recherche
  const [textSearchBar, setTextSearchBar] = useState("");
  //état de la checkbox like filtre
  const [likeChecked, setLikeChecked] = useState(false);
  //apliquer les filtre
  appliFilter(optionCocher, textSearchBar, likeChecked);

  return (
    <div id="filterBarre">
      <h2>
        Réserver une <span className="h2Color">chambre</span>
      </h2>

      <div className="filtreBar">
        <Search
          textSearchBar={textSearchBar}
          setTextSearchBar={setTextSearchBar}
        />
        <Arrival />
        <Departure />
      </div>
      <div className="filterBar2">
        <Favorie likeChecked={likeChecked} setLikeChecked={setLikeChecked} />
        <Filter optionCocher={optionCocher} setOptionCocher={setOptionCocher} />
        <div />
      </div>
    </div>
  );
};

export default FilterBar;
