const emojiContainer = document.querySelector('.emojis-container')
const unshiftBtnEl = document.querySelector('#unshiftbtn-el')
const pushBtnEl = document.querySelector('#pushbtn-el')
const shiftBtnEl = document.querySelector('#shiftbtn-el')
const popBtnEl = document.querySelector('#popbtn-el')
const inputEl = document.getElementById('input-el')
let emojisFromLocalStorage = JSON.parse(localStorage.getItem('emojis'))

let myEmojis = []

if(emojisFromLocalStorage){
    myEmojis = emojisFromLocalStorage
    renderEmojis(myEmojis)
}

function renderEmojis(emojis){
  emojiContainer.innerHTML = ""
  for ( let i = 0; i < emojis.length; i++){
    emojiContainer.innerHTML += `<span>${emojis[i]}</span>`
  }
}

pushBtnEl.addEventListener('click', function(){
  if(inputEl.value){
    myEmojis.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('emojis', JSON.stringify(myEmojis))
    renderEmojis(myEmojis)
  }
})

unshiftBtnEl.addEventListener('click', function(){
  if(inputEl.value){
    myEmojis.unshift(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('emojis', JSON.stringify(myEmojis))
    renderEmojis(myEmojis)
  }
})

shiftBtnEl.addEventListener('click', function(){
  myEmojis.shift()
  localStorage.clear()
  localStorage.setItem('emojis', JSON.stringify(myEmojis))
  renderEmojis(myEmojis)
})

popBtnEl.addEventListener('click', function(){
  myEmojis.pop()
  localStorage.clear()
  localStorage.setItem('emojis', JSON.stringify(myEmojis))
  renderEmojis(myEmojis)
})