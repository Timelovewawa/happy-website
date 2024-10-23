const countdownTimer = document.getElementById('countdown-timer');
const eventDate = new Date("October 26, 2024 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownTimer.innerHTML = "Happy Anniversary!";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);

function revealMessage() {
    document.getElementById('secret-message').style.display = 'block';
}
