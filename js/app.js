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

new ProductImage('bag', 'img/bag.jpg');
new ProductImage('banana', 'img/banana.jpg');
