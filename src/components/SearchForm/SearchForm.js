import React from "react";
import styles from "../SearchForm/SearchForm.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function SearchForm({ handleInput, handleSelect }) {
  const searchCountry = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.wrapper} onSubmit={searchCountry}>
      <form className={styles.wrapper__searchForm}>
        <div className={styles.searchForom__loupe}>
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="Search for a Country..."
          className={styles.searchForom__input}
          onChange={handleInput}
        />
        <select
          className={styles.searchForom__selectRegion}
          onChange={handleSelect}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </section>
  );
}

export default SearchForm;
