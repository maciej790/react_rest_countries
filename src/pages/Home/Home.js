import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import styles from "../Home/Home.module.scss";
import { useAllCountries } from "../../hooks/useAllCountries";
import CountryItem from "../../components/CountryItem/CountryItem";

function Home() {
  const { getData, data, isLoading, isError } = useAllCountries();

  getData("https://restcountries.com/v3.1/all");

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <main className={styles.wrapper}>
      <SearchForm />
      <section className={styles.wrapper__country}>
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
