// --- Document Object Model (DOM) Elements ---
const darkToggleBtn = document.getElementById("darkToggle");
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const outputDiv = document.getElementById("output");
const loopList = document.getElementById("loopList");
const body = document.body;

// --- Dark Mode Toggle ---
darkToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// --- Interactive Form & Conditionals ---
userForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the form from refreshing the page

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value, 10);

  outputDiv.textContent = "";
  outputDiv.classList.remove("highlight");

  if (!name || isNaN(age) || age <= 0) {
    outputDiv.textContent = "Please enter a valid name and age.";
    return;
  }

  let message;
  if (age < 18) {
    message = `Hello ${name}. You are ${age} years old. Content is restricted for users under 18.`;
  } else {
    message = `Welcome, ${name}! You are ${age} years old and have full access to our content.`;
  }

  outputDiv.textContent = message;
  userForm.reset();
});

// --- Dynamic List Generation using a Loop ---
const topics = ["HTML Structure", "CSS Styling", "JavaScript Logic", "Responsive Design"];

topics.forEach((topic) => {
  const li = document.createElement("li");
  li.textContent = topic;
  loopList.appendChild(li);
});

// --- DOM Manipulation & Event Handling ---
outputDiv.addEventListener("click", () => {
  outputDiv.classList.toggle("highlight");
});