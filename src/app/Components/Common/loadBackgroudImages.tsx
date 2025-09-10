export default function loadBackgroudImages() {
  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach(element => {
      const el = element as HTMLElement;
      let image = el.dataset.background;
      el.style.backgroundImage = `url('${image}')`;
    });
  }
  }