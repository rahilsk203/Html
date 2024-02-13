function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;

  ripple.classList.add('ripple');
  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}
