
document.querySelectorAll(".input_field").forEach(pair => {
  const checkbox = pair.querySelector('input[type="checkbox"]');
  const input = pair.querySelector('input[type="text"]');
  checkbox.addEventListener("change", () => {
    input.disabled = !checkbox.checked;
  });
});

