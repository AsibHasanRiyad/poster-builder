// posterBuilder.js

document.getElementById("header").addEventListener("input", updatePreview);
document
  .getElementById("imageUpload")
  .addEventListener("change", updateImagePreview);
document.getElementById("description").addEventListener("input", updatePreview);

function updatePreview() {
  // Get values from the form
  const header = document.getElementById("header").value;
  const description = document.getElementById("description").value;

  // Update the preview
  document.getElementById("previewHeader").textContent = header;
  document.getElementById("previewDescription").textContent = description;
}

function updateImagePreview() {
  const file = document.getElementById("imageUpload").files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("previewImage").src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
