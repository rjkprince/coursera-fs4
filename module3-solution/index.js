var bars = document.getElementById('bars');
var dropdown = document.getElementById('dropdown');
bars.addEventListener('click', function () {
  if (!dropdown.classList.contains('zero')) {
    dropdown.classList.add('zero');
    bars.style.color = '#fff';
    bars.style.borderColor = '#fff';
  } else {
    dropdown.classList.remove('zero');
    bars.style.color = 'black';
    bars.style.borderColor = 'black';
  }
});
