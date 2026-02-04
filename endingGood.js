function drawEndingGood() {
  background(210, 255, 220);

  fill(20);
  textAlign(CENTER, CENTER);
  textSize(42);
  text("GOOD ENDING", width / 2, 220);

  textSize(18);
  text("You made the right choices.", width / 2, 290);

  const restartBtn = { x: width / 2, y: 460, w: 280, h: 70, label: "Restart" };
  drawButton(restartBtn);

  cursor(isHover(restartBtn) ? HAND : ARROW);
}

function endingGoodMousePressed() {
  const restartBtn = { x: width / 2, y: 460, w: 280, h: 70 };
  if (isHover(restartBtn)) currentScreen = "start";
}
