const games = [
  { name: "Slope", url: "https://slope-game.github.io/" },
  { name: "Flappy Bird", url: "https://flappybird.io/" },
  { name: "Run 3", url: "https://run3.io/" },
  { name: "Drift Boss", url: "https://poki.com/en/g/drift-boss" },
  { name: "2048", url: "https://play2048.co/" },
  { name: "Stickman Hook", url: "https://poki.com/en/g/stickman-hook" },
  { name: "Retro Bowl", url: "https://poki.com/en/g/retro-bowl" },
  { name: "Temple Run 2", url: "https://poki.com/en/g/temple-run-2" },
  { name: "Basketball Stars", url: "https://poki.com/en/g/basketball-stars" },
  { name: "Subway Surfers", url: "https://poki.com/en/g/subway-surfers" },
  { name: "Vex 7", url: "https://poki.com/en/g/vex-7" },
  { name: "Moto X3M", url: "https://poki.com/en/g/moto-x3m" },
  { name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" },
  { name: "BitLife", url: "https://bitlifeonline.github.io/" },
  { name: "Getting Over It", url: "https://scratch.mit.edu/projects/298127192/" },
  { name: "Minecraft Classic", url: "https://classic.minecraft.net/" },
  { name: "Doodle Jump", url: "https://scratch.mit.edu/projects/447037982/" },
  { name: "Agar.io", url: "https://agar.io/" },
  { name: "Krunker", url: "https://krunker.io/" },
  { name: "Paper.io 2", url: "https://paper-io.com/" },
  { name: "Tetris", url: "https://tetris.com/play-tetris" },
  { name: "Among Us Online", url: "https://amongusplay.online/" },
  { name: "Shell Shockers", url: "https://shellshock.io/" },
  { name: "Just Fall LOL", url: "https://justfall.lol/" },
  { name: "FNAF Web", url: "https://scratch.mit.edu/projects/530348311/" },
  { name: "Helix Jump", url: "https://poki.com/en/g/helix-jump" },
  { name: "Slope Tunnel", url: "https://slopegame.online/slope-tunnel" },
  { name: "Runaway Toad", url: "https://poki.com/en/g/runaway-toad" },
  { name: "Stick Merge", url: "https://poki.com/en/g/stick-merge" },
  { name: "Dino Game", url: "https://elgoog.im/t-rex/" },
];

const gameContainer = document.getElementById("games");
games.forEach(game => {
  const div = document.createElement("div");
  div.className = "game";
  div.innerHTML = `<h3>${game.name}</h3><a href="${game.url}" target="_blank">Play Now</a>`;
  gameContainer.appendChild(div);
});
