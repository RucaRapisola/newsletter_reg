document.addEventListener("DOMContentLoaded", () => {
    const firstSection = document.querySelector(".first-section");
    const secondSection = document.querySelector(".second-section");
    const emailInput = document.querySelector(".input-email-confirm");
    const subscribeButton = document.querySelector(".button-confirm");
    const dismissButton = document.querySelector(".dismiss-button");
    const paragraphEmailReq  =document.querySelector(".email-required");
    const registeredEmail = document.querySelector("#registered-email");
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      if (isValidEmail(email)) {
        registeredEmail.textContent = email;
        firstSection.style.display = "none";
        secondSection.style.display = "flex";
      } else {
        emailInput.style.backgroundColor = "hsl(4.8, 100%, 95%)";
        emailInput.style.border = "solid 1px hsl(3, 64%, 72%)";
        emailInput.style.color = "hsl(3, 64%, 72%)";
        paragraphEmailReq.style.display="inline-block"
      }
    });
  
    dismissButton.addEventListener("click", () => {
        secondSection.style.display = "none";
        firstSection.style.display = "flex";
    });
  });
  