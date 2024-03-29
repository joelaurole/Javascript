<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Type Ahead </title>
        <link rel="stylesheet" href="style.css">
</head>
<body>

    <form class="search-form">
        <input type="text" class="search" placeholder="City or State">
        <ul class="suggestions">
            <li>Filter for a ctiy<</li>
            <li> or a state<</li>
        </ul>
    </form>
<script>
const endpoint = 'https://gist.githubusercontnet.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e25e2c6f6/cities.json';
    
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            // here we need to figure out if the city or state matches what was searched 
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex)
        {"}"})
    } 

    function numberWithCommas(x) {
        return x.toString().replace(/\)
    }   
    const prom = fetch(endpoint);
    console.log(prom)
    
    
</script>
    </body>
</html>
