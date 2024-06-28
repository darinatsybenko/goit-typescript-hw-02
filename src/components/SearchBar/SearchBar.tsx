import css from "./SearchBar.module.css";
import { FC, useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSetSearchQuery: (searchQuery: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({ onSetSearchQuery }) => {
  const [search, setSearch] = useState<string>("");
  const notify = () => toast("Please enter the search criteria");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      notify();
      return;
    } else {
      onSetSearchQuery(search);
    }
  };
  return (
    <div>
      <header className={css.header}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={handleChange}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
        <Toaster />
      </header>
    </div>
  );
};

export default SearchBar;
