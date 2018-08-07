import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:Country&api_key=${apiKey}&format=json`

export default function getArtists(selectedCountry) {
  const url = URL.replace(':Country', selectedCountry)
  console.log(url)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
  }
