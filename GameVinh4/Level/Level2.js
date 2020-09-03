function nextLevel2() {
  let ObaX = 900,
    ObaY = 300;
  // Radars = new Ground(DirX - 10, DirY - 15, 100, 5, PI / 60);
  GROUNDS.push(new Ground(500, 300, 400, 10, PI));
  GROUNDS.push(new Ground(500, 300, 400, 10, PI / 3));
  for (let i = 0; i < 15; i++) {
    let RamdomColor = [];
    RamdomColor.push(Math.floor(Math.random() * 150) + 100);
    RamdomColor.push(Math.floor(Math.random() * 200) + 100);
    RamdomColor.push(Math.floor(Math.random() * 125) + 100);
    Obas.push(new Oba(ObaX, ObaY, 25, 25, RamdomColor));
    ObaY += 25;
    if (i % 5 == 0 && i != 0) ObaY = 300;
  }
}
