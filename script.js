const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Toggle nav
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Menutup nav ketika item menu diklik
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Menghapus class 'active' untuk menutup menu
    });
});

// Mengatur animasi teks ketik
const texts = [
    "Web Dev",
    "Frontend",
    "backend"
];

let index = 0;
let charIndex = 0;
const typingText = document.querySelector('.typing-text');

function type() {
    if (charIndex < texts[index].length) {
        typingText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        index++;
        if (index >= texts.length) {
            index = 0;
        }
        setTimeout(type, 200);
    }
}

// Memulai animasi ketik
document.addEventListener("DOMContentLoaded", () => {
    type();
});
