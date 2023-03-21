const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => DisplayCountries(data))
};
const DisplayCountries = countries => {
    console.log(countries[0])
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}
const getCountryHTML = country =>{
    return `
        <div class="country">
            <img src="${country.flags.png}" class="flags-images">
            <h2>Country Name: <span class="country-name">${country.name.common}</span></h2>
            <h4>Capital Name: ${country.capital?country.capital:'NO Capital'}</h4>
            <h4>Area: ${country.area}</h4>

        </div>
    `
}
loadCountries();