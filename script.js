const btn1 = document.getElementById("button1");
const new_game_btn = null;
const photos = ["photos/Slurp_Slurp.jpeg", "photos/Spread_Eagle.jpeg", "photos/IMG_0896.jpeg", "photos/IMG_1815.jpeg", "photos/IMG_3748.jpeg", "photos/IMG_4076.jpeg", "photos/IMG_5071.jpeg", "photos/Kiss.jpeg"];
let currentIndex = 0;

btn1.addEventListener("click", function() {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "pink";
    //  Create the structure
    document.body.innerHTML = `
        <div class="carousel-container">
            <h1>For you, Ruthie!</h1>
            <div class="image-wrapper">
                <button class="nav-btn prev" id="prevBtn"> < </button>
                <img src="${photos[currentIndex]}" id="displayPhoto" class="carousel-photo">
                <button class="nav-btn next" id="nextBtn"> > </button>
                <button class="down-btn" id = "downBtn"> Are You Ready to Move On, upon clicking there is no turning back! </button>
            </div>
        </div>

    `;
    //  Grab the new elements to add logic to them
    const imgElement = document.getElementById("displayPhoto");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const downBtn = document.getElementById("downBtn");

    // Next Button Logic
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % photos.length;
        imgElement.src = photos[currentIndex];
    });

    // Prev Button Logic
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        imgElement.src = photos[currentIndex];
    });

    downBtn.addEventListener("click", () => {
        // This is where you'll transition to your game!
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "lightblue"; // Maybe a new color for the game?
        document.body.innerHTML = `
        <div class= "game-container">
            <h1> Ready to play a game, Ruthie </h1>
            <button class="game-btn" id = "gameBtn"> Start </button>
        </div
        `;
        // const gameTitle = document.createElement("h1");
        //  gameTitle.textContent = "Ready to play a game, Ruthie?";
        //   document.body.appendChild(gameTitle);
        // You'll build your game logic here next!
        const gameBtn = document.getElementById("gameBtn");

        gameBtn.addEventListener('click', function() {
            // This tells the browser to change the page
            window.location.href = "game_page/game.html";
        });
    });


});
