"use client";

import { useState } from "react";
import useWeatherSearch from "./helpers/useWeatherSearch";
import styles from "./home.module.css";
import { Card, Spinner } from "src/designSystem/components";
import WeatherConditions from "./components/WeatherConditions";
import ErrorCard from "./components/ErrorCard";

const HomePage = () => {
  const [cityName, setCityName] = useState("");

  const { data, errorMessage, isLoading, isError } = useWeatherSearch(cityName);

  return (
    <div>
      <main className={`${styles.main} ${styles.flexColumn}`}>
        <div className={styles.flexColumn}>
          <Card>
            <label className={styles.inputLabel}>
              City name
              <input
                value={cityName}
                placeholder="Cape Town"
                onChange={(e) => {
                  setCityName(e.target.value);
                }}
              />
            </label>
          </Card>
          {isLoading && <Spinner size={160} />}

          {!isLoading && data?.cityName && (
            <WeatherConditions conditions={data} />
          )}

          {isError && <ErrorCard message={errorMessage || ""} />}
        </div>
        <Card>
          <pre className={styles.debugCard}>
            <h2>DEV NOTES</h2>
            <div>
              - To trigger an invalid city search, search for an invalid city
              name like &quot;fakecity&quot;.
            </div>
            <div>
              - To trigger an unexpected error, search for
              &quot;debugforceerror&quot;.
            </div>
          </pre>
        </Card>
      </main>
    </div>
  );
};

export default HomePage;
