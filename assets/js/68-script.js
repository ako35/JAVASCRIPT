import { countries } from "../data/countries.js";

const tblCountry = document.querySelector("#tblCountry");
const ddlCountries = document.querySelector("#ddlCountries");
const totalArea=document.querySelector('#totalArea');

document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  const selectedCountry = getCountry(selectedValue);
  fillCountryTable(selectedCountry);
});

const loadData = () => {
  let options = `<option value='' disabled selected>Select a country</option>`;

  countries.sort();

  for (let country of countries) {
    options += `<option value='${country.cca2}'>${country.name.common}</option>`;
  }

  ddlCountries.innerHTML = options;
  totalArea.innerHTML=getTotalArea();
};

const fillCountryTable = (country) => {
  const capitalCity = country.capital.join("-");
  const currency = Object.keys(country.currencies).join("-");
  const languages = Object.values(country.languages).join("-");
  const area = country.area;
  const map = `<a href='https://google.com/maps/@${country.latlng.toString()},6z' target='_blank'>Go to map</a>`;

  tblCountry.querySelector("tr:nth-child(1) td").innerHTML = capitalCity;
  tblCountry.querySelector("tr:nth-child(2) td").innerHTML = currency;
  tblCountry.querySelector("tr:nth-child(3) td").innerHTML = languages;
  tblCountry.querySelector("tr:nth-child(4) td").innerHTML = area;
  tblCountry.querySelector("tr:nth-child(5) td").innerHTML = map;

  tblCountry.style.display = "block";
};

const getCountry = (countryCode) => {
  const filteredCountries = countries.filter((t) => t.cca2 === countryCode);
  return filteredCountries.length > 0 ? filteredCountries[0] : null;
};

const getTotalArea = () => {
  let totalArea = 0;
  for (let country of countries) {
    totalArea += country.area;
  }
  return totalArea.toFixed(0);

  // reduce ile yapimi
  // return countries.reduce((total,country) => total+country.area,0);
}


loadData();
