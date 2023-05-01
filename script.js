let sobre = document.querySelector('#nav ul li:nth-child(2) a');

sobre.addEventListener('click', function() {
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
  });
});
