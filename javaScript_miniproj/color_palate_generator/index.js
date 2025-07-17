const generateBtn = document.getElementById('generate-btn');
const palateContainer = document.querySelector('.palette-container');

paletteContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('copy-btn')) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains('color')) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  }
});
