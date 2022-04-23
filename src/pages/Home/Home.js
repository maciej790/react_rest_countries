import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import styles from "../Home/Home.module.scss";
import { useCountry } from "../../hooks/useCountry";
import CountryItem from "../../components/CountryItem/CountryItem";

function Home() {
  const [query, setQuery] = useState("https://restcountries.com/v3.1/all");
  const { getData, data, isLoading, isError } = useCountry();

  const searchByInput = (e) => {
    if (e.target.value) {
      setQuery(`https://restcountries.com/v3.1/name/${e.target.value}`);
    }
  };

  const searchBySelect = (e) => {
    if (e.target.value) {
      setQuery(`https://restcountries.com/v3.1/region/${e.target.value}`);
    }
  };

  getData(query);

  return (
    <main className={styles.wrapper}>
      <SearchForm handleInput={searchByInput} handleSelect={searchBySelect} />
      <section className={styles.wrapper__country}>
        {isLoading ? <h1>Loading...</h1> : isError ? <h1>Error!</h1> : null}
        {data && !isLoading && !isError
          ? data.map((country) => (
              <CountryItem country={country} key={country.cca3} />
            ))
          : null}
      </section>
    </main>
  );
}

export default Home;
