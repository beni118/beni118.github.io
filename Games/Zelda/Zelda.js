const gamePane = document.getElementById("gameGrid");
const gameNames = [
    "Zelda1",
    "Zelda2",
    "ZeldaOoT",
    "ZeldaMM"
];

function gameImage(gameName) {
    return `./${gameName}/${gameName}.png`;
}

function gamePage(gameName) {
    return `./${gameName}/${gameName}.html`;
}

function makeEntry(gameName) {
    const img = document.createElement("img");
    img.src=gameImage(gameName);
    img.onclick= () => {window.location.href = gamePage(gameName)};
    img.alt=gameName;
    img.className="gameCover";
    gamePane.append(img);
}

for(let i=0;i<gameNames.length;i++) {
    makeEntry(gameNames[i]);
}