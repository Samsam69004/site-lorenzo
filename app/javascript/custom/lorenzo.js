import confetti from "canvas-confetti";

document.addEventListener("turbo:load", () => {
  console.log("JS bien chargé");

  // 🔔 Flash message
  const notice = document.querySelector(".notice");
  if (notice) {
    console.log("✅ Flash détectée :", notice.textContent);

    // Appliquer l'affichage avec transition
    setTimeout(() => {
      notice.classList.remove("opacity-0");
      notice.classList.add("opacity-100");
    }, 100); // ⏱ laisse le temps au DOM de se poser

    // Scroll en haut
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 🎉 Confettis si succès
    if (notice.textContent.includes("Merci pour ton message")) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Disparition douce après 4s
    setTimeout(() => {
      notice.classList.remove("opacity-100");
      notice.classList.add("opacity-0");
    }, 4000);
  }

  // 📸 Onglets albums photos
  const tabs = document.querySelectorAll(".album-tab");
  const albums = document.querySelectorAll(".photo-album");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.album;

      albums.forEach((album) => {
        album.classList.toggle("hidden", album.dataset.album !== target);
      });

      tabs.forEach((t) => {
        t.classList.remove("bg-violetLorenzo", "text-white", "shadow");
        t.classList.add("bg-purple-100", "text-violet-800", "hover:bg-purple-200");
      });

      tab.classList.remove("bg-purple-100", "text-violet-800", "hover:bg-purple-200");
      tab.classList.add("bg-violetLorenzo", "text-white", "shadow");
    });
  });

  // 💌 Formulaire contact
  const openBtn = document.getElementById("open-contact");
  const formDiv = document.getElementById("contact-form");

  if (openBtn && formDiv) {
    openBtn.addEventListener("click", () => {
      if (!formDiv.classList.contains("hidden")) {
        formDiv.classList.add("opacity-0", "translate-y-4");
        setTimeout(() => formDiv.classList.add("hidden"), 300);
      } else {
        formDiv.classList.remove("hidden");
        setTimeout(() => {
          formDiv.classList.remove("opacity-0", "translate-y-4");
          formDiv.scrollIntoView({ behavior: "smooth" });
          const input = document.querySelector("#contact_name");
          if (input) input.focus();
        }, 10);
      }
    });
  }

  // ▶️ Slider vidéo
  const slider = document.getElementById("videoSlider");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  if (slider && prev && next) {
    const total = slider.children.length;
    let current = 0;

    const updateSlider = () => {
      slider.style.transform = `translateX(-${current * 100}%)`;
    };

    prev.addEventListener("click", () => {
      if (current > 0) current--;
      updateSlider();
    });

    next.addEventListener("click", () => {
      if (current < total - 1) current++;
      updateSlider();
    });
  }

  // ⏬ Scroll vers #contact si ancre dans l’URL
  if (window.location.hash === "#contact") {
    const target = document.querySelector("#contact");
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});

// 🖼️ Lightbox globale
window.openLightbox = function (src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  img.src = src;
  lightbox.classList.remove("hidden");
};

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  img.src = "";
  lightbox.classList.add("hidden");
};
