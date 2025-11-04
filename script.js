const games = [
  { name: "Slope", url: "https://ubg77.github.io/slope/" },
  { name: "Flappy Bird", url: "https://ubg77.github.io/edit/flappy-bird/" },
  { name: "Drift Boss", url: "https://ubg77.github.io/edit/drift-boss/" },
  { name: "2048", url: "https://ubg77.github.io/2048/" },
  { name: "Run 3", url: "https://ubg77.github.io/run-3/" },
  { name: "Tetris", url: "https://ubg77.github.io/edit/tetris/" },
  { name: "Stack", url: "https://ubg77.github.io/edit/stack/" },
  { name: "Basketball Stars", url: "https://ubg77.github.io/basketball-stars/" },
  { name: "Moto X3M", url: "https://ubg77.github.io/moto-x3m/" },
  { name: "Subway Surfers", url: "https://ubg77.github.io/edit/subway-surfers/" },
  { name: "Temple Run 2", url: "https://ubg77.github.io/edit/temple-run-2/" },
  { name: "Pac-Man", url: "https://ubg77.github.io/edit/pacman/" },
  { name: "Stickman Hook", url: "https://ubg77.github.io/edit/stickman-hook/" },
  { name: "Jetpack Joyride", url: "https://ubg77.github.io/edit/jetpack-joyride/" },
  { name: "Happy Wheels", url: "https://ubg77.github.io/edit/happy-wheels/" },
  { name: "Crossy Road", url: "https://ubg77.github.io/edit/crossy-road/" },
  { name: "Super Mario", url: "https://ubg77.github.io/edit/super-mario/" },
  { name: "Helix Jump", url: "https://ubg77.github.io/edit/helix-jump/" },
  { name: "Runaway Miner", url: "https://ubg77.github.io/edit/runaway-miner/" },
  { name: "Geometry Dash", url: "https://ubg77.github.io/geometry-dash/" },
  { name: "BitLife", url: "https://bitlifeonline.github.io/" },
  { name: "Cookie Clicker", url: "https://cookieclicker.ee/" },
  { name: "Doodle Jump", url: "https://doodlejump.io/" },
  { name: "Agar.io", url: "https://agar.io/" },
  { name: "Paper.io 2", url: "https://paper-io.com/" },
  { name: "Shell Shockers", url: "https://shellshock.io/" },
  { name: "Krunker", url: "https://krunker.io/" },
  { name: "Just Fall LOL", url: "https://justfall.lol/" },
  { name: "Among Us Online", url: "https://amongusplay.online/" },
  { name: "Slope Tunnel", url: "https://ubg77.github.io/slope-tunnel/" },
  { name: "Runaway Toad", url: "https://ubg77.github.io/edit/runaway-toad/" },
  { name: "Stick Merge", url: "https://ubg77.github.io/edit/stick-merge/" },
  { name: "Dino Game", url: "https://elgoog.im/t-rex/" },
  { name: "FNAF Web", url: "https://scratch.mit.edu/projects/530348311/" },
  { name: "Retro Bowl", url: "https://ubg77.github.io/edit/retro-bowl/" },
  { name: "Tomb of the Mask", url: "https://ubg77.github.io/edit/tomb-of-the-mask/" },
  { name: "Slope Ball", url: "https://ubg77.github.io/edit/slope-ball/" },
  { name: "Gun Mayhem 2", url: "https://ubg77.github.io/edit/gun-mayhem-2/" },
  { name: "Tunnel Rush", url: "https://ubg77.github.io/edit/tunnel-rush/" },
  { name: "Color Tunnel", url: "https://ubg77.github.io/edit/color-tunnel/" },
  { name: "Fruit Ninja", url: "https://ubg77.github.io/edit/fruit-ninja/" },
  { name: "Stick Duel Battle", url: "https://ubg77.github.io/edit/stick-duel-battle/" },
  { name: "Vex 7", url: "https://ubg77.github.io/edit/vex7/" },
  { name: "Tank Trouble", url: "https://ubg77.github.io/edit/tank-trouble/" },
  { name: "Snow Rider 3D", url: "https://ubg77.github.io/edit/snow-rider-3d/" },
  { name: "Drive Mad", url: "https://ubg77.github.io/edit/drive-mad/" },
  { name: "Monkey Mart", url: "https://ubg77.github.io/edit/monkey-mart/" },
  { name: "OvO", url: "https://ubg77.github.io/edit/ovo/" },
  { name: "Smash Karts", url: "https://smashkarts.io/" }
];

const gameList = document.getElementById("gameList");
const gameFrame = document.getElementById("gameFrame");
const backButton = document.getElementById("backButton");

games.forEach(game => {
  const tile = document.createElement("div");
  tile.className = "game-tile";
  tile.innerText = game.name;
  tile.addEventListener("click", () => openGame(game.url));
  gameList.appendChild(tile);
});

function openGame(url) {
  gameList.classList.add("hidden");
  gameFrame.src = url;
  gameFrame.classList.remove("hidden");
  backButton.classList.remove("hidden");
}

backButton.addEventListener("click", () => {
  gameFrame.classList.add("hidden");
  gameFrame.src = "";
  backButton.classList.add("hidden");
  gameList.classList.remove("hidden");
});
