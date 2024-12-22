const SearchBar = ({ onSearchEvent }) => {

  function handleInputSubmit(event) {
    if (event.key === "Enter") {
      onSearchEvent(event.target.value.toLowerCase());
    }
  }

  return (
    <form className="d-flex" role="search" onSubmit={(event) => event.preventDefault()}>
      <input className="form-control me-2" onKeyDown={handleInputSubmit} type="search" placeholder="Search" aria-label="Search" />
    </form>
  );
};

export default SearchBar;