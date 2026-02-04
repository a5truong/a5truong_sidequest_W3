function drawScene2A() {
  background(230, 245, 255);

  fill(20);
  textAlign(CENTER, TOP);
  textSize(34);
  text("Scene 2A", width / 2, 80);

  textSize(18);
  text("You found something useful. What do you do?", width / 2, 150);

  const goodBtn = {
    x: width / 2,
    y: 320,
    w: 320,
    h: 70,
    label: "Use it wisely",
  };
  const badBtn = { x: width / 2, y: 410, w: 320, h: 70, label: "Ignore it" };

  drawButton(goodBtn);
  drawButton(badBtn);

  cursor(isHover(goodBtn) || isHover(badBtn) ? HAND : ARROW);
}

function scene2AMousePressed() {
  const goodBtn = { x: width / 2, y: 320, w: 320, h: 70 };
  const badBtn = { x: width / 2, y: 410, w: 320, h: 70 };

  if (isHover(goodBtn)) currentScreen = "endingGood";
  else if (isHover(badBtn)) currentScreen = "endingBad";
}
