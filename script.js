// 1. Click Event
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button clicked!");
});

// 2. Double Click
document.getElementById("myDiv").addEventListener("dblclick", function() {
  this.style.backgroundColor = "yellow";
});

// 3. Mouse Over / Out
let box = document.getElementById("box");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "lightblue";
});
box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "white";
});

// 4. Key Down / Up
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});
document.addEventListener("keyup", function(event) {
  console.log("Key released:", event.key);
});

// 5. Input / Change
let inputBox = document.getElementById("name");
inputBox.addEventListener("input", function() {
  console.log("Typing:", inputBox.value);
});
inputBox.addEventListener("change", function() {
  console.log("Final value after leaving input:", inputBox.value);
});

// 6. Scroll
window.addEventListener("scroll", function() {
  console.log("Scroll position:", window.scrollY);
});

// Modal Dialog
let openBtn = document.getElementById("openDialog");
let closeBtn = document.getElementById("closeDialog");
let dialog = document.getElementById("myDialog");

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

// Progress Bar
let progress = document.getElementById("myProgress");
let startBtn = document.getElementById("startProgress");

startBtn.addEventListener("click", () => {
  let value = 0;
  progress.value = value;

  let interval = setInterval(() => {
    value += 10;
    progress.value = value;

    if (value >= 100) {
      clearInterval(interval);
      alert("Download complete!");
    }
  }, 500); // every 0.5s
});

// ✅ Validation Functions
function validateEmail(email) {
  let format = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;  // allows .com, .net, .org, .com.ng etc.
  return format.test(email);
}

function validateUsername(username) {
  let format = /^[a-zA-Z0-9_]{4,12}$/; // only letters, numbers, underscore, 4–12 chars
  return format.test(username);
}

function validateSignUp() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let message = document.getElementById("message").value.trim();

  // Not empty
  if (!name || !email || !username || !message) {
    alert("All fields are required");
    return false; // prevent form submission
  }

  // Validate email
  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return false;
  }

  // Validate username
  if (!validateUsername(username)) {
    alert("Username must be 4–12 characters long and contain only letters, numbers, or underscores");
    return false;
  }

  // If everything is valid
  alert("✅ Your response has been successfully recorded");
  return true; // allow form submission
}
