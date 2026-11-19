

// - Complete Product Page Product Preview + Order Now Section Script -
const TO_ADDRESS = "orders@examplewebsite142.com";

// -- Elements: Thumbnail & Main Image Switcher --
const mainImage = document.getElementById("main-product-image");
const thumbnailButtons = document.querySelectorAll(".thumbnail-btn");

// -- Elements: Size, Quantity and Order Now --
const sizeButtons = document.querySelectorAll(".size-btn");
const qtyInput = document.getElementById("item-quantity");
const decreaseBtn = document.getElementById("decrease-qty");
const increaseBtn = document.getElementById("increase-qty");
const orderBtn = document.querySelector("#order-now-btn");

let selectedSize = "";

// -- Thumbnail & Main Image Switcher --

if (mainImage && thumbnailButtons.length > 0) {
    thumbnailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const newSrc = button.getAttribute("data-image");
            const thumbImg = button.querySelector("img");
            mainImage.src = newSrc;
            if (thumbImg) {
                mainImage.alt = thumbImg.alt;
            }

            thumbnailButtons.forEach(function (btn) {
                btn.classList.remove("border-info", "border-2");
            });
            button.classList.add("border-info", "border-2");
        });
    });
}

// -- Size Selector --

if (sizeButtons.length > 0) {
    sizeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            sizeButtons.forEach(function (btn) {
                btn.classList.remove("border-info", "border-2", "fw-semibold");
                btn.classList.add("border-secondary-subtle");
            })

            button.classList.remove("border-secondary-subtle");
            button.classList.add("border-info", "border-2", "fw-semibold");
            selectedSize = button.textContent.trim();
        })
    })
}

// -- Quantity Counter --

if (qtyInput && decreaseBtn && increaseBtn) {
    decreaseBtn.addEventListener("click", function () {
        const currentVal = parseInt(qtyInput.value, 10) || 1;
        if (currentVal > 1) {
            qtyInput.value = currentVal - 1;
        }
    })

    increaseBtn.addEventListener("click", function () {
        const currentVal = parseInt(qtyInput.value, 10) || 1;
        qtyInput.value = currentVal + 1;
    })

    qtyInput.addEventListener("change", function () {
        const currentVal = parseInt(qtyInput.value, 10);
        if (isNaN(currentVal) || currentVal < 1) {
            qtyInput.value = 1;
        }

    });
}

// -- Build Mailto Link & Order Now
function buildMailto() {
    const product = document.querySelector("#product-name").textContent.trim();
    const size = selectedSize;
    const quantity = qtyInput.value;

    const subject = "Order request: " + product + " (" + size + ")";
    const body =
        "Product: " + product + "\r\n" +
        "Size: " + size + "\r\n" +
        "Quantity: " + quantity + "\n\n" +
        "Please Fill Out the Following Fields: " + "\r\n" +
        "Full Name: \r\n" +
        "Delivery Address: \r\n" +
        "Contact Number: ";
    
    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );

}
// -- Order Now Button 
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        if (!selectedSize) {
            alert('Please select a size before placing your order.');
            return;
        }

        window.open(buildMailto(), "_blank", "noopener,noreferrer");
    })
}
// --- TO BE ADDED: Product Detail + Size Chart + Product Care Section Script ---