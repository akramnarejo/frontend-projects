const randDog = document.querySelector('.random-dog')
const getDog = document.querySelector('.get-dog')


getDog.addEventListener('click', getRandomDog)


function getRandomDog(){
 fetch('https://random.dog/woof.json')
  .then(res => res.json())
  .then(data => {randDog.innerHTML = `
  <img src="${data.url}" alt="dog"/>`})
}