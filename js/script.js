// --- Navbar: Current Page Highlight Switcher ---
const navLinks = document.querySelectorAll('#mainNav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 1. Remove active state and aria-current from all links
        navLinks.forEach(item => {
            item.classList.remove('active');
            item.removeAttribute('aria-current');
        });

        // 2. Add active state and aria-current to clicked link
        this.classList.add('active');
        this.setAttribute('aria-current', 'page');
    })
})

// --- Product Page Body Script
// --- 1. Thumbnail & Main Image Switcher ---
const mainImage = document.getElementById("main-product-image");
const thumbnailButtons = document.querySelectorAll(".thumbnail-btn");

if (mainImage && thumbnailButtons.length > 0) {
  thumbnailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const newSrc = button.getAttribute("data-image");
      const thumbImg = button.querySelector("img");
      mainImage.src = newSrc;
      if (thumbImg) {
        mainImage.alt = thumbImg.alt;
      }

      thumbnailButtons.forEach((btn) => btn.classList.remove("border-info", "border-2"));
      button.classList.add("border-info", "border-2");
    });
  });
}

// --- 2. Size Selector ---
  const sizeButtons = document.querySelectorAll(".size-btn");
  let selectedSize = "";

  if (sizeButtons.length > 0) {
    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Reset all size buttons back to muted border
        sizeButtons.forEach((btn) => {
          btn.classList.remove("border-info", "border-2", "fw-semibold");
          btn.classList.add("border-secondary-subtle");
        });

        // Highlight the clicked size button
        button.classList.remove("border-secondary-subtle");
        button.classList.add("border-info", "border-2", "fw-semibold");

        // Store the selected size text (e.g., "M")
        selectedSize = button.textContent.trim();
      });
    });
  }

  // --- 3. Quantity Counter ---
  const qtyInput = document.getElementById("shirtname-quantity");
  const decreaseBtn = document.getElementById("decrease-qty");
  const increaseBtn = document.getElementById("increase-qty");

  if (qtyInput && decreaseBtn && increaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      const currentVal = parseInt(qtyInput.value, 10) || 1;
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      const currentVal = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = currentVal + 1;
    });

    qtyInput.addEventListener("change", () => {
      const currentVal = parseInt(qtyInput.value, 10);
      if (isNaN(currentVal) || currentVal < 1) {
        qtyInput.value = 1;
      }
    });
  }
