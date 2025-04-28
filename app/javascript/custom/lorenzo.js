document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-contact");
  const formDiv = document.getElementById("contact-form");

  if (openBtn && formDiv) {
    openBtn.addEventListener("click", () => {
      formDiv.classList.toggle("hidden");
      formDiv.scrollIntoView({ behavior: "smooth" });
    });
  }

  const flashNotice = document.querySelector(".notice");
  if (flashNotice && flashNotice.textContent.includes("Merci pour ton message")) {
    import("canvas-confetti").then((confetti) => {
      confetti.default();
    });
  }
});
