// Small interactive feature
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully!");

  // Example: Highlight sidebar items on click
  const sections = document.querySelectorAll(".sidebar .section h3");
  sections.forEach(sec => {
    sec.addEventListener("click", () => {
      alert(`You clicked on: ${sec.innerText}`);
    });
  });
});