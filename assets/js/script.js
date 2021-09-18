const searchInp = document.querySelector("#region");
const suggestions = document.querySelector("#suggestions");
const baseEndPoint = 'https://api.teleport.org/api/cities/?search=';

searchInp.addEventListener('input', async () => {
    let endpoint = baseEndPoint + searchInp.value;
    let result = await (await fetch(endpoint)).json();
    suggestions.innerHTML = '';
    let cities = result._embedded['city:search-results'];
    let length = cities.length > 5 ? 5 : cities.length;
    for(let i = 0; i < length; i++) {
        let option = document.createElement('option');
        option.value = cities[i].matching_full_name;
        suggestions.appendChild(option);
    }
})