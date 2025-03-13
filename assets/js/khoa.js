document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("show");
            }
        });
    }

    // Kiểm tra khi tải trang & khi cuộn
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
