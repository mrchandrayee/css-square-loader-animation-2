document.querySelectorAll(".copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.closest(".code").querySelector("pre code").textContent;
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Select code";
    }
    window.setTimeout(() => { button.textContent = original; }, 1300);
  });
});
