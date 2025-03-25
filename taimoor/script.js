// Show an alert when the page loads
window.onload = function() {
    alert("Welcome to Taimoor's Magical World! 🎉");
};

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ["#ffe4e1", "#ffb6c1", "#ffdab9", "#e6e6fa", "#d8bfd8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add a button to change background color
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Change Background 🌈";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#ff6699";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    
    button.addEventListener("click", changeBackgroundColor);
    
    document.body.appendChild(button);
});

// Image click effect - enlarges when clicked
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector(".profile-img");

    if (profileImage) {
        profileImage.addEventListener("click", function() {
            if (this.style.transform === "scale(1.5)") {
                this.style.transform = "scale(1)";
            } else {
                this.style.transform = "scale(1.5)";
            }
            this.style.transition = "transform 0.3s ease-in-out";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector(".profile-img");

    if (profileImage) {
        console.log("Image found:", profileImage.src);
    } else {
        console.error("Image not found! Check the file path.");
    }
});
