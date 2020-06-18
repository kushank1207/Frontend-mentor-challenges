const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const dropdown = document.getElementById('dropdown');

hamburger.addEventListener('click', function() {
  hamburger.style.display = 'none';
  dropdown.style.display = 'flex';
  close.style.display = 'flex';
});

close.addEventListener('click', function() {
  close.style.display = 'none';
  dropdown.style.display = 'none';
  hamburger.style.display = 'flex';
});
