//colecting variabels
//get slider items | array.from "search"
var sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));

//get num of items in the array(slides)
var slidesCount = sliderImgs.length;

//set current slide
var currentSlide = 1;

//slide num string element
var slideNumEle = document.getElementById("slide-number");

//prev and next btns
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

//handle clicks on prev and next btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

//create main ul element
var paginationElement = document.createElement("ul");

//set id for ul element
paginationElement.setAttribute("id", "pagination-ul");

//loop for li based on slide count
for (var i = 1; i <= slidesCount; i++) {
  //create li
  var paginationItems = document.createElement("li");
  //set custom atr
  //set item content
  //append items to the main ul list
  paginationElement.appendChild(paginationItems);
}
//add the created ul to the page
document.getElementById("indicators").appendChild(paginationElement);

//get the new created ul
var paginationNewUl = document.getElementById("pagination-ul");

//get pagination items | array.from "search"
var paginationbullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//loop through all bullets items

//trigger the checker function
theChecker();
//next slide function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    //do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
//prev slide function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    //do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

//create checker function
function theChecker() {
  //set slide number
  //remove all active classes
  removeActive();
  //set active class on current slide
  sliderImgs[currentSlide - 1].classList.add("active");
  //set active class on current pagination item
  paginationNewUl.children[currentSlide - 1].classList.add("active");

  //check if current slide is the first
  if (currentSlide == 1) {
    //add disabeld class on prev btn
    prevBtn.classList.add("disabled");
  } else {
    //remove disabeld class from prev btn
    prevBtn.classList.remove("disabled");
  }

  //check if current slide is the last
  if (currentSlide == slidesCount) {
    //add disabeld class on next btn
    nextBtn.classList.add("disabled");
  } else {
    //remove disabeld class from next btn
    nextBtn.classList.remove("disabled");
  }
}

//remove all active classes from imgs and pagination bullets
function removeActive() {
  //loop through img
  sliderImgs.forEach(function (img) {
    img.classList.remove("active");
  });
  //loop through pagination bullets
  paginationbullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
