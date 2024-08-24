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

function updatePreview() {
  document.getElementById("previewHeader").textContent =
    document.getElementById("header").value;
  document.getElementById("previewDescription").textContent =
    document.getElementById("description").value;
}

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

function toggleVisibility(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Initial setup: Hide all sections except the form
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("headerSection").style.display = "none";
  document.getElementById("imageUploadSection").style.display = "none";
  document.getElementById("descriptionSection").style.display = "none";
});
