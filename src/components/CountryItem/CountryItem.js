/* eslint-disable react/prop-types */
import React from "react";
import styles from "../CountryItem/CountryItem.module.scss";

function CountryItem({ country }) {
  return (
    <div className={styles.countryItem}>
      <img className={styles.countryItem__img} src={country.flags.png} />
      <div className={styles.countryItem__data}>
        <h2 className={styles.countryItem__dataName}>{country.name.common}</h2>
        <p className={styles.countryItem__title}>
          Population:{" "}
          <span className={styles.countryItem__result}>
            {country.population}
          </span>
        </p>
        <p className={styles.countryItem__title}>
          Region:{" "}
          <span className={styles.countryItem__result}>{country.region}</span>
        </p>
        {country.capital ? (
          <p className={styles.countryItem__title}>
            Capital:{" "}
            <span className={styles.countryItem__result}>
              {country.capital[0]}
            </span>
          </p>
        ) : (
          <p className={styles.countryItem__title}>
            Capital:
            <span className={styles.countryItem__result}>None</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default CountryItem;
