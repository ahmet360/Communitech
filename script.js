// Fact of the Day data (replace with your facts)
const factsOfTheDay = [
    "Fact 1: AI-powered VR is revolutionizing the way we experience virtual worlds.",
    "Fact 2: Virtual Reality has endless applications, from gaming to training simulations.",
    "Fact 3: Augmented Reality enhances our real-world experiences through digital overlays.",
    "Fact 4: Mixed Reality combines virtual and physical worlds for interactive experiences.",
    "Fact 5: Comunnitech's AI algorithms create breathtaking VR worlds from simple prompts."
];



// Function to get a random fact
function getRandomFact() {
    return factsOfTheDay[Math.floor(Math.random() * factsOfTheDay.length)];
}

// Function to display the fact of the day
function displayFactOfTheDay() {
    const factElement = document.getElementById("fact");
    factElement.textContent = getRandomFact();
}

// Function to reset fact of the day after 24 hours
function resetFactOfTheDay() {
    setInterval(() => {
        displayFactOfTheDay();
    }, 86400000); // 24 hours in milliseconds
}

// Function to handle the click event on the hidden button
document.getElementById("changeFactBtn").addEventListener("click", () => {
    displayFactOfTheDay();
});

// Call the function to display the initial fact of the day
displayFactOfTheDay();

// Call the function to reset fact of the day every 24 hours
resetFactOfTheDay();
