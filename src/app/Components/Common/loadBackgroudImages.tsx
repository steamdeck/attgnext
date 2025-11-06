export default function loadBackgroudImages() {
  // Check if document is available (client-side only)
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach(element => {
      const el = element as HTMLElement;
      let image = el.dataset.background;
      if (image) {
        el.style.backgroundImage = `url('${image}')`;
      }
    });
  }
}