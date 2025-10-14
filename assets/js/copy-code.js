document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre > code");

  // Palet warna untuk tombol
  const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

  codeBlocks.forEach((codeBlock) => {
    const pre = codeBlock.parentNode;
    pre.style.position = "relative";

    // Label tombol: ambil heading sebelumnya jika ada
    let label = "Copy";
    let prev = pre.previousElementSibling;
    if (prev && /^H[1-6]$/i.test(prev.tagName)) {
      label = `Copy ${prev.textContent.trim().split("\n")[0]}`;
    }

    // Tombol
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = label;

    // Feedback
    const feedback = document.createElement("span");
    feedback.className = "copy-feedback";
    feedback.innerText = `Copied!`;

    pre.appendChild(button);
    pre.appendChild(feedback);

    // Pilih warna awal
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;

    // Event click
    button.addEventListener("click", () => {
      const code = codeBlock.innerText;
      navigator.clipboard.writeText(code).then(() => {
        // Tampilkan feedback
        feedback.classList.add("show");
        setTimeout(() => feedback.classList.remove("show"), 1500);

        // Animasi warna acak saat click
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = newColor;

        // Ubah teks tombol sementara
        const original = button.innerText;
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = original), 1200);
      }).catch((err) => console.error("Failed to copy:", err));
    });

    // Event hover: warna acak
    button.addEventListener("mouseenter", () => {
      const hoverColor = colors[Math.floor(Math.random() * colors.length)];
      button.style.backgroundColor = hoverColor;
    });
  });
});
