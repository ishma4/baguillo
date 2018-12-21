/*se crea la función setup que crea un lienzo en el que dibujar, pertenece a la libreria de processing*/
function setup() {
  createCanvas(640, 480);
}
/*se crea la función draw, la cual si el ratón está presionado se cambia de color el fondo, 
además constantemente se crea un círculo en la posición del ratón*/
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}