import "./styles.css";

const locationContent = document.querySelector('.location');
const API_URL = "http://ip-api.com/json/";
let loading = true;

fetch(API_URL)
  .then((res) => {
    loading = false;
    console.log(res);
    locationContent.textContent = res;
  })
  .catch(err => {
    console.error(err);
    locationContent.textContent = 'Cause an error.😫';
  });

if (loading === true) {
  locationContent.textContent = 'loading your info..';
}