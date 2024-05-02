import countries from "world-countries";

const countriesFormatted = countries.map((countries) => ({
  value: countries.cca2,
  label: countries.name.common,
  flag: countries.flag,
  latLang: countries.latlng,
  region: countries.region,
}));

export const useCountries = () => {
  const getAllCountries = () => countriesFormatted;

  const getCountryByValue = (value: string) => {
    return countriesFormatted.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getCountryByValue,
  };
};
