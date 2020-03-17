'use strict';

//Bucket for all my image objects

var imagePool = [];

//construction function to create image objects

function ProductImage(name, imagePath) {

  this.name = name;
  this.imagePath = imagePath;
  this.numClicked = 0;
  this.timesRendered = 0;
  imagePool.push(this);

}

ProductImage.prototype.renderData = function() {

  var getList = document.getElementById('voteData');
  var createListEl = document.createElement('li');

  // var message = this.name + ' had ' + this.numClicked + ' votes and was shown ' + this.timesRendered + ' times.';
  var message = this.name + ' had ' + this.numClicked + ' votes';

  createListEl.textContent = message;

  getList.appendChild(createListEl);
};

function postResults() {

  for (var i = 0; i < imagePool.length; i++)

    imagePool[i].renderData();
}

//building objects with constructor for each image
new ProductImage('Bag', 'img/bag.jpg');
new ProductImage('Banana', 'img/banana.jpg');
new ProductImage('Bathroom', 'img/bathroom.jpg');
new ProductImage('Boots', 'img/boots.jpg');
new ProductImage('Breakfast', 'img/breakfast.jpg');
new ProductImage('Bubblegum', 'img/bubblegum.jpg');
new ProductImage('Chair', 'img/chair.jpg');
new ProductImage('Cthulhu', 'img/cthulhu.jpg');
new ProductImage('Dog-duck', 'img/dog-duck.jpg');
new ProductImage('Dragon', 'img/dragon.jpg');
new ProductImage('Pen', 'img/pen.jpg');
new ProductImage('Pet-sweep', 'img/pet-sweep.jpg');
new ProductImage('Scissors', 'img/scissors.jpg');
new ProductImage('Shark', 'img/shark.jpg');
new ProductImage('Sweep', 'img/sweep.png');
new ProductImage('Tauntaun', 'img/tauntaun.jpg');
new ProductImage('Unicorn', 'img/unicorn.jpg');
new ProductImage('Usb', 'img/usb.gif');
new ProductImage('Water-can', 'img/water-can.jpg');
new ProductImage('Wine-glass', 'img/wine-glass.jpg');

console.log(imagePool);

//creating variables to access img tags in html
var getImage1 = document.getElementById('img1');
var getImage2 = document.getElementById('img2');
var getImage3 = document.getElementById('img3');

//Random image generator function rig=random image generator
function rig() {

  var i = Math.floor(Math.random() * imagePool.length);

  while (
    imagePool[i].name === getImage1.name ||
    imagePool[i].name === getImage2.name ||
    imagePool[i].name === getImage3.name
  )
  {
    i = Math.floor(Math.random() * imagePool.length);
  }
  return imagePool[i];
}


//Renders random image to the DOM
function renderProducts() {

  var newImage1 = rig();

  getImage1.src = newImage1.imagePath;
  getImage1.name = newImage1.name;
  newImage1.timesRendered++;

  var newImage2 = rig();

  getImage2.src = newImage2.imagePath;
  getImage2.name = newImage2.name;
  newImage2.timesRendered++;

  var newImage3 = rig();

  getImage3.src = newImage3.imagePath;
  getImage3.name = newImage3.name;
  newImage3.timesRendered++;
}

renderProducts();

//event handler that once fired renders new images and also tracks numClicks.
var counter = 0;
function clickHandler(event) {

  console.log(event.target.name);


  if (counter < 2 ) {

    for ( var i = 0; i < imagePool.length; i++)
      if (imagePool[i].name === event.target.name) {
        imagePool[i].numClicked++;
        counter++;
      }
    renderProducts();

  } else {
    event = false;
    alert('Thank you for taking the product servey!');
    postResults();
  }
}


//adding listener to elements in html
getImage1.addEventListener('click', clickHandler);
getImage2.addEventListener('click', clickHandler);
getImage3.addEventListener('click', clickHandler);




