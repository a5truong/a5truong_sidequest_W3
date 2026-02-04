function drawEndingBad() {
  background(255, 210, 210);

  fill(20);
  textAlign(CENTER, CENTER);
  textSize(42);
  text("BAD ENDING", width / 2, 220);

  textSize(18);
  text("That choice didn’t go well…", width / 2, 290);

  const restartBtn = {
    x: width / 2,
    y: 460,
    w: 280,
    h: 70,
    label: "Try Again",
  };
  drawButton(restartBtn);

  cursor(isHover(restartBtn) ? HAND : ARROW);
}

function endingBadMousePressed() {
  const restartBtn = { x: width / 2, y: 460, w: 280, h: 70 };
  if (isHover(restartBtn)) currentScreen = "start";
}
