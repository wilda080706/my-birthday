window.addEventListener('load', function() {
    const container = document.getElementById('confetti-container');
    const confettiCount = 100;
    const colors = ['#FF6347', '#FFD700', '#1E90FF', '#FF69B4', '#32CD32'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(confetti);
    }

    setTimeout(() => {
        document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    }, 5000);
});
