//function to clear plans when the svg is clicked

function handleClearPlans() {
  const plans = document.querySelector(".section-two-main");
  const margin = document.querySelector(".margin");

  plans.style.display = "none";
  margin.style.paddingTop = "3%";
}

// function to handle the setup guide(child)

function handleCustomiseClick(setNumber) {
  document.querySelectorAll(".customise-setup").forEach((setup) => {
    const imgDiv = setup.querySelector(".customise-img-div");
    const subtextDiv = setup.querySelector(".customise-subtext-div");
    const themeDiv = setup.querySelector(".customise-theme");
    const textOne = setup.querySelector(".customise-setup-text-one");

    // Hiding all the setups before dey are clicked
    imgDiv.style.display = "none";
    subtextDiv.style.display = "none";
    themeDiv.style.display = "none";
    textOne.style.fontWeight = "500";
    textOne.style.marginTop = "3.2%";
  });

  const setupDiv = document.querySelector(`#customise-setup-${setNumber}`);
  const imgDiv = setupDiv.querySelector(".customise-img-div");
  const subtextDiv = setupDiv.querySelector(".customise-subtext-div");
  const themeDiv = setupDiv.querySelector(".customise-theme");
  const textOne = setupDiv.querySelector(".customise-setup-text-one");
  const setupWrapper = setupDiv.querySelector(".customise-setup");

  // Showing all the setups after its clicked
  imgDiv.style.display = "block";
  subtextDiv.style.display = "block";
  themeDiv.style.display = "flex";
  themeDiv.style.alignItems = "center";
  themeDiv.style.justifyContent = "center";
  textOne.style.fontWeight = "600";
  textOne.style.marginTop = "1%";

  
}
//function to handle setups (main)

function toggleSetups() {
  const setupSvg = document.querySelector(".setup-svg");
  const setupSvgTwo = document.querySelector(".setup-svg-two");
  const setups = document.getElementById("setups");

  // Getting the current display style of the setups element
  const setupsDisplayStyle = window
    .getComputedStyle(setups)
    .getPropertyValue("display");

  // if statemants to dislay and hide the setups(main)
  if (setupsDisplayStyle === "none") {
    setups.style.display = "block";
    setupSvg.style.display = "none";
    setupSvgTwo.style.display = "block";
  } else {
    setups.style.display = "none";
    setupSvg.style.display = "block";
    setupSvgTwo.style.display = "none";
  }
}

//function for animation of set up svg
function rotateOnClick() {
  const setupSvg = document.querySelector(".setup-svg");
  const setupSvgTwo = document.querySelector(".setup-svg-two");
  setupSvg.classList.toggle("rotate360");
  setupSvgTwo.classList.toggle("rotate360");
  console.log("Class toggled");
}

document.querySelector(".setup-svg").addEventListener("click", rotateOnClick);
document
  .querySelector(".setup-svg-two")
  .addEventListener("click", rotateOnClick);

function svgClick() {
  const svg = document.querySelector(".customise-svg");
}

// progress bar

const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");

let checkboxCount = 0;
updateStatus();

function updateStatus() {
  const completionPercentage = (checkboxCount / 5) * 100;
  progressBar.style.width = `${completionPercentage}%`;
  statusText.textContent = `${checkboxCount} / 5 completed`;
}

// function for toggling when the circle is checked
function handleSvgClick(svgElement) {
  svgElement.classList.toggle("checked");
  checkboxCount = document.querySelectorAll(".customise-svg.checked").length;
  updateStatus();

  const svgCircle = svgElement.querySelector("circle");
  if (svgElement.classList.contains("checked")) {
    svgCircle.style.display = "none";
    svgElement.innerHTML =
      '<image href="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" width="32" height="32" />';
  } else {
    svgElement.innerHTML =
      '<circle cx="16" cy="16" r="12" stroke="grey" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />';
  }
}

//function for hovering  of set up div

function hover() {
  const setUpDiv = document.querySelector(".setup-svg-div");

  setUpDiv.style.backgroundColor = "#F3F3F3";
  setUpDiv.style.borderRadius = "5px";
}
document.querySelector(".setup-svg-div").addEventListener("mouseover", hover);

//function for unhovering of set up div
function unhover() {
  const setUpDiv = document.querySelector(".setup-svg-div");

  setUpDiv.style.backgroundColor = "";
  setUpDiv.style.borderRadius = "";
}

document.querySelector(".setup-svg-div").addEventListener("mouseout", unhover);

//function to hover and unhover the dc dropdowns

function alertHover(event) {
  const alert = event.target;
  alert.style.backgroundColor = "#e3e3e3";
  const dcDivP = alert.querySelector(".dc-div-p");
  alert.style.borderRadius = "5px";
  alert.style.padding = "5px";

  if (dcDivP) {
    dcDivP.style.marginTop = "0";
  }
}

function alertUnhover(event) {
  const alert = event.target;
  const dcDivP = alert.querySelector(".dc-div-p");
  alert.style.backgroundColor = "";
  alert.style.borderRadius = "";

  if (dcDivP) {
    dcDivP.style.marginTop = "";
  }
}

const dcDivs = document.querySelectorAll(".dc-div");

dcDivs.forEach((div) => {
  div.addEventListener("mouseover", alertHover);
  div.addEventListener("mouseout", alertUnhover);
});

//function for admin dropdown toggle

function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  const navWriteup = document.querySelector(".nav-writeup");

  navWriteup.classList.toggle("checked");

  dropdownContent.style.display = navWriteup.classList.contains("checked")
    ? "block"
    : "none";
}

//function for notification
function showNotification() {
  const notification = document.querySelector(".notification");
  const notificationSvg = document.querySelector(".notification-div");

  notificationSvg.classList.toggle("checked");

  notification.style.display = notificationSvg.classList.contains("checked")
    ? "block"
    : "none";
}

