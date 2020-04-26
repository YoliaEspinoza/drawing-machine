function setup() {
  createCanvas(windowWidth, windowHeight);
  background(143, 169, 157);

  strokeWeight(8);
  // stroke('rgba(245, 183, 183, 1)');
  // fill(213, 167, 239);


}

function draw() {

  if (mouseIsPressed) {
    stroke('rgba(245, 183, 183, 1)');
    stroke(map(mouseX, 0, 1000, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);


  }
}

function keyTyped(){
  // console.log(`key ${key} is being typed`)
  console.log("key" + key + "is being typed")
  if(key === 's'){
    //save this image
    saveCanvas('fileName', 'png')
  }
    else if (key === 'c'){
  		clear();
      background(143, 169, 157);

  }
  return false;
}
background(143, 169, 157);
