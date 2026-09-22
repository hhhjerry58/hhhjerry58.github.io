// Native disclosures support touch and keyboard without JavaScript.
// Fine-pointer hover previews a description; clicking keeps it open.
const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');

document.querySelectorAll('.misc-item').forEach((item) => {
  const summary = item.querySelector('summary');
  let hoverPreview = false;

  item.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse' && hoverPointer.matches && !item.open) {
      hoverPreview = true;
      item.open = true;
    }
  });

  item.addEventListener('pointerleave', () => {
    if (hoverPreview) {
      item.open = false;
      hoverPreview = false;
    }
  });

  summary.addEventListener('click', (event) => {
    if (hoverPreview) {
      event.preventDefault();
      hoverPreview = false;
      item.open = true;
    }
  });
});
