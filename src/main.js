import './style.css'

import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <div class="palindrome-checker">
    <h1>Comprovador de Palindroms</h1>
    <p>Introdueix una paraula o frase per comprovar si és un palindrom</p>
  <div class="input-group">
    <input type="text" id="inputWord" placeholder="Ex: 'Anna', 'Dábale arroz...'">
    <button onclick="checkPalindrome()">Comprovar</button>
  </div>
    <div id="result" class="result"></div>
    <div id="reversedWord" class="reversed-word" ></div>
    
  </div>
`