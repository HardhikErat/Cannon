let player, tankSpeed = 2,
  tankSize = 10,
  bulletSpeed = 5,
  bulletSize = 8;
let tanks = [];
let bullets = [];


function setup() {
  createCanvas(400, 400);
  player = new Tank(true, 20, 370, tankSize, 'r');
}

function keyPressed() {
  if (keyCode == 32)
    bullets.push(new Bullet(player.x, player.y, bulletSize,
      player.dir, bulletSpeed));
}

function draw() {
  background(0);


  if (bullets.length > 0) {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].render(200, 200, 0);
      if (bullets[i].x < 0 || bullets[i].x > width ||
        bullets[i].y < 0 || bullets[i].y > height)
        bullets.splice(i, 1)
    }
  }

  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, height);

  player.render(random(0,255), random(0,255),random(0,255));
  for (var i = 0; i < tanks.length; i++) 
    tanks[i].render(200,0,0);
}