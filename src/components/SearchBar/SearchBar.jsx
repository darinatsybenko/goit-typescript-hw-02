import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SearchBar = ({ onSetSearchQuery }) => {
  const [search, setSearch] = useState("");
  const notify = () => toast("Please enter the search criteria");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      notify();
      return;
    } else {
      onSetSearchQuery(search);
    }
  };
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <Toaster />
      </header>
    </div>
  );
};

export default SearchBar;
