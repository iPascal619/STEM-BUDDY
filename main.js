// change navbar styles

window.addEventListener("scroll", () => {
    document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show hide faq questions
document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const faqIcon = faq.querySelector('.faq_icon');

        faqIcon.addEventListener('click', () => {
            faq.classList.toggle('open');
        });
    });
});
