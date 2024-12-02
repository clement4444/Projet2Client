interface SearchProps {
  textSearchBar: string;
  setTextSearchBar: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ textSearchBar, setTextSearchBar }) => {
  //changer le state texteSarchBar à la modification

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearchBar(event.target.value); // Mettre à jour le state avec la nouvelle valeur
  };

  return (
    <>
      <input
        type="text"
        placeholder="Votre chambre"
        className="searchBar"
        value={textSearchBar}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
