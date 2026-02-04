function drawScene2B() {
  background(255, 240, 230);

  fill(20);
  textAlign(CENTER, TOP);
  textSize(34);
  text("Scene 2B", width / 2, 80);

  textSize(18);
  text("A new challenge appears. Choose your move:", width / 2, 150);

  const goodBtn = { x: width / 2, y: 320, w: 320, h: 70, label: "Be brave" };
  const badBtn = { x: width / 2, y: 410, w: 320, h: 70, label: "Panic" };

  drawButton(goodBtn);
  drawButton(badBtn);

  cursor(isHover(goodBtn) || isHover(badBtn) ? HAND : ARROW);
}

function scene2BMousePressed() {
  const goodBtn = { x: width / 2, y: 320, w: 320, h: 70 };
  const badBtn = { x: width / 2, y: 410, w: 320, h: 70 };

  if (isHover(goodBtn)) currentScreen = "endingGood";
  else if (isHover(badBtn)) currentScreen = "endingBad";
}
