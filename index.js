// Existing event listeners for header, description, and image upload
document.getElementById("header").addEventListener("input", updatePreview);
document.getElementById("description").addEventListener("input", updatePreview);
document
  .getElementById("imageUpload")
  .addEventListener("change", updateImagePreview);

document.getElementById("headerButton").addEventListener("click", function () {
  toggleVisibility("headerSection");
});
document.getElementById("imageButton").addEventListener("click", function () {
  toggleVisibility("imageUploadSection");
});
document
  .getElementById("descriptionButton")
  .addEventListener("click", function () {
    toggleVisibility("descriptionSection");
  });

// New event listeners for alignment and color buttons
document
  .getElementById("alignLeftButton")
  .addEventListener("click", function () {
    setTextAlignment("left");
  });
document
  .getElementById("alignCenterButton")
  .addEventListener("click", function () {
    setTextAlignment("center");
  });
document
  .getElementById("alignRightButton")
  .addEventListener("click", function () {
    setTextAlignment("right");
  });

document
  .getElementById("colorBlueButton")
  .addEventListener("click", function () {
    setTextColor("blue");
  });
document
  .getElementById("colorBlackButton")
  .addEventListener("click", function () {
    setTextColor("black");
  });
document
  .getElementById("colorGreenButton")
  .addEventListener("click", function () {
    setTextColor("green");
  });

// Function to update the preview header and description
function updatePreview() {
  document.getElementById("previewHeader").textContent =
    document.getElementById("header").value;
  document.getElementById("previewDescription").textContent =
    document.getElementById("description").value;
}

// Function to update the image preview
function updateImagePreview(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementById("previewImageDisplay");
      previewImage.src = e.target.result;
      previewImage.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
}

// Function to toggle the visibility of sections
function toggleVisibility(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// New functions to set text alignment and color
function setTextAlignment(alignment) {
  document.getElementById("previewHeader").style.textAlign = alignment;
}

function setTextColor(color) {
  document.getElementById("previewHeader").style.color = color;
}

// Initial setup to hide sections
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("headerSection").style.display = "none";
  document.getElementById("imageUploadSection").style.display = "none";
  document.getElementById("descriptionSection").style.display = "none";
});

// Existing image download functionality
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const posterPreview = document.getElementById("posterPreview");

    html2canvas(posterPreview).then((canvas) => {
      const link = document.createElement("a");
      link.download = "poster.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
