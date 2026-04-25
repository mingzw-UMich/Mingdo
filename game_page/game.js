const gameB = document.getElementById("gameBtn");
let map_counter = 0;
const maps = [
    "../game_photos/Ming.jpg",
    "../game_photos/map_2.jpg"
];

function getRandomLocation() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    return { x, y };
}

// Separate function to handle the "Found" logic so we don't reload the page
function loadNextLevel() {
    map_counter++;
    if (map_counter < maps.length) {
        // Trigger the game logic again for the next map
        renderGame();
    } else {
        //document.body.style.backgroundImage = `url('')`;
        document.body.innerHTML = "<h1>You've Completed the game!</h1>";
    }
}

function renderGame() {
    const loc = getRandomLocation();

    // Update Background
    document.body.style.backgroundImage = `url('${maps[map_counter]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Update Content
    document.body.innerHTML = `
        <div class="game-container">
            <button type="button" class="image-button" id="image_find" 
                    style="position: absolute; left: ${loc.x}px; top: ${loc.y}px; border: none; background: none;">
                <img src="../game_photos/pic_one.jpeg" alt="Find Ming" style="width: 30px;">
            </button>
        </div>
    `;

    // Re-attach listener to the NEWly created button
    document.getElementById("image_find").addEventListener("click", function() {
        alert("You found Mingo! Loading next level...");
        loadNextLevel();
    });
}

gameB.addEventListener("click", renderGame);
