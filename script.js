function toggleMenu() {
    console.log("toggle menu");
    var menuList = document.getElementById("menuList");
    menuList.classList.toggle("responsive");
    var sidebar = document.getElementById("sidebar");
    if (menuList.classList.contains("responsive")) {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(200px)";
    }
}


function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.querySelector(".snowfall-container").appendChild(snowflake);

    const size = Math.random() * 40 + 20;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    const rotation = Math.random() * 360;
    snowflake.style.transform = `rotate(${rotation}deg)`;

    const startLeft = Math.random() * window.innerWidth;
    snowflake.style.left = startLeft + "px";

    snowflake.style.top = `-${size}px`;

    const animationDuration = Math.random() * 5 + 3; // Random duration between 3 to 8 seconds

    // Animate the snowflake falling
    snowflake.style.animation = `snowfall ${animationDuration}s linear infinite`;

    snowflake.addEventListener("animationiteration", () => {
        // When a snowflake reaches the bottom, reset its position to the top
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = `-${size}px`;
    });
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 1500); 

// Call the function when the page loads
window.onload = () => {
    createSnowflake();
};




