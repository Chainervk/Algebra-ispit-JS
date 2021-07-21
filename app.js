const endpoint = 'https://itunes.apple.com/search?term=';

const inputElement = document.querySelector('[data-search-input]');
const resultElement = document.querySelector('[data-search-result]');

inputElement.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value;
  
  
  fetch(endpoint + searchTerm )
  
    .then(response => response.json())
    .then(data => {
        resultElement.innerHTML = '';
        topbar.show();
  
        for (let i = 0; i < data.results.length; i++) {
          const result = data.results[i];
          const trackName = result.trackName;
          
          const itemElement = document.createElement('div');
          
          itemElement.innerText = trackName;
          resultElement.appendChild(itemElement);
        }
        topbar.hide();
      })
    .catch((error) => {
      console.error(error);
      alert('No result found!')
    });
});