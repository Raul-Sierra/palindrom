document.getElementById('checkButton').addEventListener('click', function () {
  const input = document.getElementById('inputWord').value.trim();
  const resultDiv = document.getElementById('result');
  const reversedDiv = document.getElementById('reversedWord');

  if (!input) {
    resultDiv.textContent = 'Si us plau, introduiu text.';
    resultDiv.className = 'result not-palindrome';
    resultDiv.style.display = 'block';
    reversedDiv.textContent = '';
    return;
  }

  const cleanedInput = input
    .toLocaleLowerCase()
    .replace(/[^a-z0-9à-èì-òùá-éí-óúýâ-êî-ôûãñõä-ëï-öüÿç]/g, '');
  const reversed = cleanedInput.split('').reverse().join('');

  reversedDiv.textContent = `${reversed}`;

  if (cleanedInput === reversed) {
    resultDiv.textContent = 'És un palindrom';
    resultDiv.className = 'result palindrome';
  } else {
    resultDiv.textContent = 'No és un palindrome';
    resultDiv.className = 'result not-palindrome';
  }
  resultDiv.style.display = 'block';
});
