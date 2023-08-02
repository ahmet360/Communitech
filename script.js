// ... (existing code) ...

// Function to get a random fact
function getRandomFact() {
    const facts = [
        "AI is revolutionizing the VR world!",
        "VR and AR will reshape how we interact with technology.",
        "MR combines virtual and real-world experiences seamlessly.",
        "AI can generate stunning VR environments with just a prompt.",
        // Add more facts here
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}

// Function to update the fact of the day
function updateFactOfTheDay() {
    const factElement = document.getElementById('fact');
    factElement.textContent = getRandomFact();
}

// Event listener for the hidden button to change the fact
const changeFactBtn = document.getElementById('changeFactBtn');
changeFactBtn.addEventListener('click', () => {
    updateFactOfTheDay();
});

// Initialize the fact of the day
updateFactOfTheDay();

// ... (existing code) ...
