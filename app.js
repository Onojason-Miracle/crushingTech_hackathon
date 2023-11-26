function handleClearPlans() {
  const plans = document.querySelector(".section-two-main");
  const margin = document.querySelector(".margin");

  plans.style.display = "none";
  margin.style.paddingTop = "3%";
}




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



const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");

let checkboxCount = 0;
updateStatus();


function updateStatus() {
  const completionPercentage = (checkboxCount / 5) * 100;
  progressBar.style.width = `${completionPercentage}%`;
  statusText.textContent = `${checkboxCount} / 5 completed`;
}



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



function toggleSetups() {
  const setupSvg = document.querySelector(".setup-svg");
  const setupSvgTwo = document.querySelector(".setup-svg-two");
  const setups = document.getElementById("setups");
  const setUpDiv = document.querySelector(".setup-svg-div");

  const setupsDisplayStyle = window
    .getComputedStyle(setups)
    .getPropertyValue("display");

  if (setups.style.display === "none") {
    setups.style.display = "block";
    setupSvg.style.display = "none";
    setupSvgTwo.style.display = "block";
  } else {
    setups.style.display = "none";
    setupSvg.style.display = "block";
    setupSvgTwo.style.display = "none";
  }
}

function hover() {
  const setUpDiv = document.querySelector(".setup-svg-div");

  setUpDiv.style.backgroundColor = "#F3F3F3";
  setUpDiv.style.borderRadius = "5px";
}


document.querySelector(".setup-svg-div").addEventListener("mouseover", hover);

function unhover() {
  const setUpDiv = document.querySelector(".setup-svg-div");

  setUpDiv.style.backgroundColor = "";
  setUpDiv.style.borderRadius = "";
}

document.querySelector(".setup-svg-div").addEventListener("mouseout", unhover);

// 1. the setup guide icon toggle - done
// 2. the check of the boxes - done
// 3. the progress bar to follow the checked boxes - done
// 4. animation on the boxes
// 5. background color on display of the contents of the boxes
// 6. when one box is displaying a content, the others should Not - done
// 7. responsiveness
// 8. accessibility to keyboard users
