// Form validation
const form = document.getElementById("newsletterForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const thankYouMsg = document.getElementById("thankYouMsg");
const submitBtn = document.getElementById("submitBtn");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (valid) {
    localStorage.setItem("subscriberName", nameInput.value.trim());
    localStorage.setItem("subscriberEmail", emailInput.value.trim());

    thankYouMsg.classList.remove("hidden");
    form.classList.add("hidden");
    submitBtn.disabled = true;
  }
});

// Image slider with smooth fade transition every 3 seconds
const sliderImage = document.getElementById("sliderImage");
const imageList = [
  "internship_team.jpg",
  "career_growth.jpg",
  "subscribe_email.jpg",
  "students_working.jpg"
];
let currentImage = 0;

function fadeToNextImage() {
  sliderImage.classList.add("fade-out");

  setTimeout(() => {
    currentImage = (currentImage + 1) % imageList.length;
    sliderImage.src = imageList[currentImage];
    sliderImage.classList.remove("fade-out");
    sliderImage.classList.add("fade-in");

    setTimeout(() => {
      sliderImage.classList.remove("fade-in");
    }, 500);
  }, 500);
}

setInterval(fadeToNextImage, 3000);
