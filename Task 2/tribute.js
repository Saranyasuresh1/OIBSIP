// Get a reference to the image element
const kalamImage = document.getElementById("kalamImage");

// An array of image URLs for Dr. Kalam
const imageUrls = [
    "apj_abdul_kalam.jpg",
    "kalam_in_lab.jpg",
    "kalam_with_students.jpg"
];

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    kalamImage.src = imageUrls[currentImageIndex];
}

// Add a click event listener to the image
kalamImage.addEventListener("click", changeImage);
