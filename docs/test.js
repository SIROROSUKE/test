// script.js
async function readAndDisplayTxt() {
  const response = await fetch('data.txt');
  const text = await response.text();
  document.getElementById('output').innerText = text;
}

async function writeTxt() {
  const newText = 'This is a new text.';
  await fetch('data.txt', {
    method: 'PUT',
    body: newText,
  });
  document.getElementById('output').innerText = 'Text written successfully!';
}
