(() => {
    const refs = {
      openMenuBtn: document.querySelector(".button-open"),
      closeMenuBtn: document.querySelector(".mob-menu__button-close"),
      menu: document.querySelector(".mob-menu"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.menu.classList.toggle("no-scroll");
    }
  })();