document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("age-modal");
  const cookieBar = document.getElementById("cookie-bar");

  const ageVerified = localStorage.getItem("ageVerified") === "true";
  const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";

  if (!ageVerified) {
    modal.style.display = "flex"; 
  } else if (!cookiesAccepted) {
    cookieBar.style.display = "flex"; 
  }

  document.getElementById("age-confirm").addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    modal.style.display = "none"; 
    if (!cookiesAccepted) {
      cookieBar.style.display = "flex"; 
    }
  });

  
  document.getElementById("age-decline").addEventListener("click", () => {
    alert("You must be 18+ to access this site.");
    window.location.href = "https://google.com"; 
  });

  
  document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBar.style.display = "none"; 
  });


  if (ageVerified && cookiesAccepted) {
    modal.style.display = "none";
    cookieBar.style.display = "none"; 
  }
});
