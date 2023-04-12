function lotusLoading() {
  setTimeout(function() {
    document.getElementById("vtmLotus").remove();
    document.getElementById("loading").style.height = "0";
  }, 5000);
}

//code from https://css-tricks.com/scroll-triggered-animation-vanilla-javascript
function scrollTrigger(selector) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el)
  });
}
function addObserver(el) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    });
  });
  observer.observe(el)
}

//code from https://linuxhint.com/change-image-on-hover-in-javascript
function aura_hover() {
  document.getElementById("aura-hover").src = "../vtresmarias/vtm_aura_hover.svg";
  document.getElementById("aura-hover").style.transition = "0.5s";
}
function aura_hoverOut() {
  document.getElementById("aura-hover").src = "../vtresmarias/vtm_aura.svg";
  document.getElementById("aura-hover").style.transition = "0.5s";
}
function aga_hover() {
  document.getElementById("aga-hover").src = "../vtresmarias/vtm_aga_hover.svg";
  document.getElementById("aga-hover").style.transition = "0.5s";
}
function aga_hoverOut() {
  document.getElementById("aga-hover").src = "../vtresmarias/vtm_aga.svg";
  document.getElementById("aga-hover").style.transition = "0.5s";
}
function hina_hover() {
  document.getElementById("hina-hover").src = "../vtresmarias/vtm_hina_hover.svg";
  document.getElementById("hina-hover").style.transition = "0.5s";
}
function hina_hoverOut() {
  document.getElementById("hina-hover").src = "../vtresmarias/vtm_hina.svg";
  document.getElementById("hina-hover").style.transition = "0.5s";
}