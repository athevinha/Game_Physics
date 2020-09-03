function nextLevel4() {
  GROUNDS.push(new Ground(500, height, 400, 10, PI / 2));
  GROUNDS.push(new Ground(600, height / 2, 400, 10, PI));
  let ObaX = 900,
    ObaY = 300;
  //Radars = new Ground(DirX - 10, DirY - 15, 100, 5, PI / 60);
  for (let i = 0; i < 40; i++) {
    let RamdomColor = [];
    RamdomColor.push(Math.floor(Math.random() * 150) + 100);
    RamdomColor.push(Math.floor(Math.random() * 200) + 100);
    RamdomColor.push(Math.floor(Math.random() * 125) + 100);
    Obas.push(new Oba(ObaX, ObaY, 25, 25, RamdomColor));
    ObaX += 25;
    if (i % 5 == 0 && i != 0) ObaX = 900;
  }
}
