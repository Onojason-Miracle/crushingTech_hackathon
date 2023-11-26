// // Example JavaScript to update the progress bar dynamically
// var progressBar = document.getElementById('progress-bar');
// var fraction = 1 / 5; // Change this value to represent the desired fraction

// progressBar.style.width = (fraction * 100) + '%';

// function handleCustomiseClick(setNumber) {
//   const setupDiv = document.querySelector(`#customise-setup-${setNumber}`);
//   const svgDiv = setupDiv.querySelector(".customise-setup-svg-div");
//   const textOne = setupDiv.querySelector(".customise-setup-text-one");
//   const subtextDiv = setupDiv.querySelector(".customise-subtext-div");
//   const themeDiv = setupDiv.querySelector(".customise-theme");
//   const imgDiv = setupDiv.querySelector(".customise-img-div");
//   const customise = setupDiv.querySelector("#customise-setup-1");

//   imgDiv.style.display = "block";
//   subtextDiv.style.display = "block";

//   themeDiv.style.display = "flex";
//   themeDiv.style.justifyContent = "center";
//   themeDiv.style.alignItems = "center";
// //   themeDiv.style.height ="28px;"
//   textOne.style.fontWeight = "600";
//   textOne.style.marginTop = "1%";
// }


function handleCustomiseClick(setNumber) {
    // Iterate over all setup elements to hide their elements
    document.querySelectorAll('.customise-setup').forEach((setup) => {
      const imgDiv = setup.querySelector('.customise-img-div');
      const subtextDiv = setup.querySelector('.customise-subtext-div');
      const themeDiv = setup.querySelector('.customise-theme');
  
      // Hide elements of each setup
      imgDiv.style.display = 'none';
      subtextDiv.style.display = 'none';
      themeDiv.style.display = 'none';
    });
  
    // Show the elements of the clicked setup
    const setupDiv = document.querySelector(`#customise-setup-${setNumber}`);
    const imgDiv = setupDiv.querySelector('.customise-img-div');
    const subtextDiv = setupDiv.querySelector('.customise-subtext-div');
    const themeDiv = setupDiv.querySelector('.customise-theme');
    const textOne = setupDiv.querySelector(".customise-setup-text-one");
    const setup = setupDiv.querySelector(".customise-setup");
  
    imgDiv.style.display = 'block';
    subtextDiv.style.display = 'block';
    themeDiv.style.display = 'flex';
    themeDiv.style.alignItems = 'center';
    themeDiv.style.justifyContent = "center";
    textOne.style.fontWeight = '600';
    textOne.style.marginTop = '1%';
    setup.style.backgroundColor = "red";
  }
  





function handleClearPlans(){
    const plans = document.querySelector(".section-two-main");
    const margin = document.querySelector(".margin");

    plans.style.display = "none";
    margin.style.paddingTop = "3%";
}

// 1. the setup guide icon toggle
// 2. the check of the boxes
// 3. the progress bar to follow the checked boxes
// 4. animation on the boxes
// 5. background color on display of the contents of the boxes
// 6. when one box is displaying a content, the others should Not
// 7. responsiveness
// 8. accessibility to keyboard users
