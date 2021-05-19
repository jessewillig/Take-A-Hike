import axios from 'axios'

function getAnime () {
    return axios.get(`https://api.jikan.moe/v3/search/anime?q=fullmetal&order_by=title&sort=asc&limit=10`)
}
getAnime
.then(response => {
    response.json();
    console.log(response)
})
