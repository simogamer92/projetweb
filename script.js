// =============================================
//  SIDEBAR TOGGLE + OVERLAY
// =============================================

const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("sidebar-overlay");

function openSidebar() {
  navbar.classList.add("apparait");
  overlay.classList.add("active");
}

function closeSidebar() {
  navbar.classList.remove("apparait");
  overlay.classList.remove("active");
}

toggle.addEventListener("click", () => {
  navbar.classList.contains("apparait") ? closeSidebar() : openSidebar();
});

// Close sidebar when tapping the dark overlay
overlay.addEventListener("click", closeSidebar);

// Close sidebar when a nav link is clicked (mobile UX)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

// =============================================
//  TAB SWITCHING
// =============================================

document.querySelectorAll(".tabs").forEach((tabGroup) => {
  const buttons = tabGroup.querySelectorAll(".tab");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

// =============================================
//  "GO TO MENU" BUTTON → scroll to specials
// =============================================

const btnMenu = document.getElementById("btn-go-to-menu");
if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    document.getElementById("special")?.scrollIntoView({ behavior: "smooth" });
  });
}