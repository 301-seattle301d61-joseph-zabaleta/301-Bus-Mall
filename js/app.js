'use strict';

//Bucket for all my image objects

var imagePool = [];


var ctx = document.getElementById('myChart').getContext('2d');
var mainChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderWidth: 3
    },{
      label: '# of Times Rendered',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    legend: {
      position: 'right',
    },
    title:{
      display: true,
      text: 'Total Votes / Total Times Rendered',
      fontSize: 25
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


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

function renderChartData() {

  for (var i = 0; i < imagePool.length; i++) {

    mainChart.data.labels.push(imagePool[i].name);
    mainChart.data.datasets[0].data.push(imagePool[i].numClicked);
    mainChart.data.datasets[1].data.push(imagePool[i].timesRendered);
  }

}

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


  if (counter < 25 ) {

    for ( var i = 0; i < imagePool.length; i++)
      if (imagePool[i].name === event.target.name) {
        imagePool[i].numClicked++;
        counter++;
      }
    renderProducts();

  } else {
    event = false;
    alert('Thank you for taking the product servey!');
    // postResults();
    renderChartData();
    mainChart.update();

    getImage1.removeEventListener('click', clickHandler);
    getImage2.removeEventListener('click', clickHandler);
    getImage3.removeEventListener('click', clickHandler);
  }
}


//adding listener to elements in html
getImage1.addEventListener('click', clickHandler);
getImage2.addEventListener('click', clickHandler);
getImage3.addEventListener('click', clickHandler);
