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


// JavaScript function to create and animate snowflakes within the menu bar width
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.querySelector(".snowfall-container").appendChild(snowflake);

    const size = Math.random() * 40 + 20;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    const rotation = Math.random() * 360;
    snowflake.style.transform = `rotate(${rotation}deg)`;

    // Get the dimensions of the menu bar
    const menuBar = document.getElementById("menuList");
    const menuBarWidth = menuBar.clientWidth;

    // Calculate the starting left position within the menu bar width
    const startLeft = Math.random() * (menuBarWidth - size);
    snowflake.style.left = startLeft + "px";

    snowflake.style.top = `-${size}px`;

    const animationDuration = Math.random() * 5 + 3; // Random duration between 3 to 8 seconds
    snowflake.style.animation = `snowfall ${animationDuration}s linear infinite`;

    snowflake.addEventListener("animationiteration", () => {
        const newLeft = Math.random() * (menuBarWidth - size);
        snowflake.style.left = newLeft + "px";
        snowflake.style.top = `-${size}px`;
    });
}



// Create snowflakes at regular intervals
setInterval(createSnowflake, 1500); 

// Call the function when the page loads
window.onload = () => {
    createSnowflake();
};




