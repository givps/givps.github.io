document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre > code");

  codeBlocks.forEach((codeBlock) => {
    const pre = codeBlock.parentNode;
    pre.style.position = "relative";

    // Tentukan label tombol
    let label = pre.dataset.copyLabel || "Copy";
    let prev = pre.previousElementSibling;
    if (prev && /^H[1-6]$/i.test(prev.tagName)) {
      label = prev.textContent.trim().split("\n")[0];
    }

    // Tombol
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = label.startsWith("Copy") ? "Copy" : `Copy ${label}`;

    // Feedback
    const feedback = document.createElement("span");
    feedback.className = "copy-feedback";
    feedback.innerText = `Copied${label ? " — " + label : "!"}`;

    pre.appendChild(button);
    pre.appendChild(feedback);

    button.addEventListener("click", () => {
      const code = codeBlock.innerText;
      navigator.clipboard.writeText(code).then(() => {
        // Tampilkan feedback
        feedback.classList.add("show");
        setTimeout(() => feedback.classList.remove("show"), 1500);

        // Tombol sementara berubah
        const original = button.innerText;
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = original), 1200);
      }).catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    });
  });
});
