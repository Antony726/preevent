var myIndex = 0;
function reset(index) {
  myIndex = index;
  resetMany(myIndex);
}

function triggerDisplay(index) {
  myIndex = index;
  displayMany(myIndex);
}

function displayMany(i) {
  var plus = document.getElementById(`plus${i}`);
  var details = document.getElementById(`details${i}`);
  var vl = document.getElementById(`vl${i}`);
  var bText = document.getElementById(`bText${i}`);
  var content = document.getElementById(`content${i}`);
  var upArrow = document.getElementById(`upArrow${i}`);
  var rules = document.getElementById(`cardRules${i}`);
  var card = document.getElementById(`card${i}`);
  var cardImg = document.getElementById(`cardImage${i}`);
  var regButton = document.getElementById(`regButton${i}`);

  if (window.innerWidth >= 768) {
    card.style.width = '100%';
    cardImg.style.width = '33%';
  } else {
    card.style.width = 'auto';
    cardImg.style.width = '100%';
  }
  details.style.display = 'flex';
  vl.style.display = 'flex';
  bText.style.display = 'flex';
  content.style.display = 'flex';
  upArrow.style.display = 'flex';
  rules.style.display = 'inline-block';
  plus.style.display = 'none';
  regButton.style.display = 'flex'

  setTimeout(function () {
    setOpacity(i);
  }, 300);
}

function setOpacity(i) {
  var plus = document.getElementById(`plus${i}`);
  var details = document.getElementById(`details${i}`);
  var vl = document.getElementById(`vl${i}`);
  var bText = document.getElementById(`bText${i}`);
  var content = document.getElementById(`content${i}`);
  var upArrow = document.getElementById(`upArrow${i}`);
  var rules = document.getElementById(`cardRules${i}`);
  var card = document.getElementById(`card${i}`);
  var cardImg = document.getElementById(`cardImage${i}`);
  var regButton = document.getElementById(`regButton${i}`);

  details.style.opacity = '1.0';
  vl.style.opacity = '1.0';
  content.style.opacity = '1.0';
  bText.style.opacity = '1.0';
  upArrow.style.opacity = '1.0';
  plus.style.opacity = '1.0';
  rules.style.opacity = '1.0';
  regButton.style.opacity = '1.0';
}

function setDisplayTime(i) {
  var plus = document.getElementById(`plus${i}`);
  var details = document.getElementById(`details${i}`);
  var vl = document.getElementById(`vl${i}`);
  var bText = document.getElementById(`bText${i}`);
  var content = document.getElementById(`content${i}`);
  var upArrow = document.getElementById(`upArrow${i}`);
  var rules = document.getElementById(`cardRules${i}`);
  var card = document.getElementById(`card${i}`);
  var cardImg = document.getElementById(`cardImage${i}`);
  var regButton = document.getElementById(`regButton${i}`);

  cardImg.style.width = '100%';
  if (window.innerWidth >= 768) {
    card.style.width = '25%';
  } else {
    card.style.width = 'auto';
  }
   
  details.style.display = 'none';
  vl.style.display = 'none';
  content.style.display = 'none';
  bText.style.display = 'none';
  upArrow.style.display = 'none';
  plus.style.display = 'flex';
  rules.style.display = 'none';
  regButton.style.display = 'none';

}

function resetMany(i) {
  var plus = document.getElementById(`plus${i}`);
  var details = document.getElementById(`details${i}`);
  var vl = document.getElementById(`vl${i}`);
  var bText = document.getElementById(`bText${i}`);
  var content = document.getElementById(`content${i}`);
  var upArrow = document.getElementById(`upArrow${i}`);
  var rules = document.getElementById(`cardRules${i}`);
  var card = document.getElementById(`card${i}`);
  var cardImg = document.getElementById(`cardImage${i}`);
  var regButton = document.getElementById(`regButton${i}`);

  details.style.opacity = '0';
  vl.style.opacity = '0';
  bText.style.opacity = '0';
  content.style.opacity = '0';
  upArrow.style.opacity = '0';
  rules.style.opacity = '0';
  regButton.style.opacity = '0';

  setTimeout(function () {
    setDisplayTime(myIndex);
  }, 300);
}
 
AOS.init({
  duration: 1000,
})
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
