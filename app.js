// // Example JavaScript to update the progress bar dynamically
// var progressBar = document.getElementById('progress-bar');
// var fraction = 1 / 5; // Change this value to represent the desired fraction

// progressBar.style.width = (fraction * 100) + '%';





function handleCustomiseClick(setNumber) {
    const textContainer = document.getElementById(`customise-setup-${setNumber}`).querySelector('.customise-setup-text');
    const textOne = textContainer.querySelector('.customise-setup-text-one');
    const imgDiv = document.getElementById(`customise-setup-${setNumber}`).querySelector('.customise-img-div');
    const text = document.querySelector('.customise-setup-text-onee')

    const setup = document.querySelector(".customise-setup");

    // Toggle visibility of text container and image div
    textContainer.style.display = textContainer.style.display === 'none' ? 'flex' : 'none';
    imgDiv.style.display = imgDiv.style.display === 'none' ? 'block' : 'none';

    text.style.display = "none";
    textContainer.style.position="absolute";
    textContainer.style.marginLeft="2%";
    setup.style.backgroundColor = "#F3F3F3";
}


