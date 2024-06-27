document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const image = document.getElementById("preview");

  function changeImageSource(event) {
    const elementId = event.target.id;
    switch (elementId) {
      case "f2m":
        image.src = "snapshots/f2mservices.jpg";
        break;
      case "dig":
        image.src = "snapshots/digicoleo.jpg";
        break;
      case "gal":
        image.src = "snapshots/galerie.jpg";
        break;
      case "cha":
        image.src = "snapshots/chatbot.jpg";
        break;
      case "rep":
        image.src = "snapshots/more.jpg";
        break;
      default:
        image.src = "img/Logo.png";
    }
  }

  // Function to reset the image source
  function resetImageSource() {
    image.src = "img/Logo.png";
  }

  // Add event listeners to the elements
  const elements = document.querySelectorAll("#f2m,#dig,#gal,#cha,#rep");
  elements.forEach((element) => {
    element.addEventListener("mouseover", changeImageSource);
  });
});
