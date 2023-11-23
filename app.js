// // Example JavaScript to update the progress bar dynamically
// var progressBar = document.getElementById('progress-bar');
// var fraction = 1 / 5; // Change this value to represent the desired fraction

// progressBar.style.width = (fraction * 100) + '%';








function handleCustomiseClick(setNumber) {
    const setupDiv = document.querySelector(`#customise-setup-${setNumber}`);
    const svgDiv = setupDiv.querySelector('.customise-setup-svg-div');
    const textOne = setupDiv.querySelector('.customise-setup-text-one');
    const subtextDiv = setupDiv.querySelector('.customise-subtext-div');
    const themeDiv = setupDiv.querySelector('.customise-theme');
    const imgDiv = setupDiv.querySelector('.customise-img-div');
    const customise = setupDiv.querySelector('.customise-setup');

   
   
    imgDiv.style.display = "block";
    subtextDiv.style.display = "block";
    themeDiv.style.display = "block";
    textOne.style.fontWeight = "600";
    customise.style.backgroundColor = "black";
   
  }





