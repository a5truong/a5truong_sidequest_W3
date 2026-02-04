function drawScene1() {
  background(245);

  fill(20);
  textAlign(CENTER, TOP);
  textSize(34);
  text("Scene 1", width / 2, 80);

  textSize(18);
  text("You reach a fork in the story. Choose:", width / 2, 150);

  const aBtn = { x: width / 2, y: 320, w: 320, h: 70, label: "Option A" };
  const bBtn = { x: width / 2, y: 410, w: 320, h: 70, label: "Option B" };

  drawButton(aBtn);
  drawButton(bBtn);

  cursor(isHover(aBtn) || isHover(bBtn) ? HAND : ARROW);
}

function scene1MousePressed() {
  const aBtn = { x: width / 2, y: 320, w: 320, h: 70 };
  const bBtn = { x: width / 2, y: 410, w: 320, h: 70 };

  if (isHover(aBtn)) currentScreen = "scene2A";
  else if (isHover(bBtn)) currentScreen = "scene2B";
}
