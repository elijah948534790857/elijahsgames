const games = [
  { name: "Slope", url: "https://example.com/slope" },
  { name: "Flappy Bird", url: "https://example.com/flappybird" },
  { name: "Drift Boss", url: "https://example.com/driftboss" },
  { name: "2048", url: "https://example.com/2048" },
  { name: "Run 3", url: "https://example.com/run3" },
  { name: "Tetris", url: "https://example.com/tetris" },
  { name: "Stack", url: "https://example.com/stack" },
  { name: "Basketball Stars", url: "https://example.com/basketballstars" },
  { name: "Moto X3M", url: "https://example.com/motox3m" },
  { name: "Subway Surfers", url: "https://example.com/subwaysurfers" },
  { name: "Temple Run", url: "https://example.com/templerun" },
  { name: "Pac-Man", url: "https://example.com/pacman" },
  { name: "Stickman Hook", url: "https://example.com/stickmanhook" },
  { name: "Jetpack Joyride", url: "https://example.com/jetpackjoyride" },
  { name: "Happy Wheels", url: "https://example.com/happywheels" },
  { name: "Crossy Road", url: "https://example.com/crossyroad" },
  { name: "Super Mario", url: "https://example.com/supermario" },
  { name: "Helix Jump", url: "https://example.com/helixjump" },
  { name: "Runaway Miner", url: "https://example.com/runawayminer" },
  { name: "Geometry Dash", url: "https://example.com/geometrydash" }
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
