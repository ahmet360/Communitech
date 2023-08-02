// Get the button and fact elements
const changeFactBtn = document.getElementById('changeFactBtn');
const factElement = document.getElementById('fact');

// Fact data
const facts = [
    "AI is revolutionizing the VR world!",
    "VR and AR will reshape how we interact with technology.",
    "MR combines virtual and real-world experiences seamlessly.",
    "AI can generate stunning VR environments with just a prompt.",
    // Add more facts here
];

// Function to get a random fact
function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}

// Function to update the fact of the day
function updateFactOfTheDay() {
    const fact = getRandomFact();
    localStorage.setItem('fact', fact);
    localStorage.setItem('factTimestamp', Date.now());
    factElement.textContent = fact;
}

// Check if the fact should be updated (every 24 hours)
function checkAndUpdateFact() {
    const factTimestamp = localStorage.getItem('factTimestamp');
    if (!factTimestamp) {
        updateFactOfTheDay();
    } else {
        const twentyFourHours = 24 * 60 * 60 * 1000;
        const currentTime = Date.now();
        if (currentTime - factTimestamp >= twentyFourHours) {
            updateFactOfTheDay();
        } else {
            factElement.textContent = localStorage.getItem('fact');
        }
    }
}

// Show the hidden button after 5 seconds
setTimeout(() => {
    changeFactBtn.classList.add('show');
}, 5000);

// Event listener for the hidden button to change the fact
changeFactBtn.addEventListener('click', () => {
    updateFactOfTheDay();
});

// Initialize the fact of the day
checkAndUpdateFact();
