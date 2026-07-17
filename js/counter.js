// ===== KPI COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.kpi-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 1200;
        const start = performance.now();

        function updateCounter(time) {
            const progress = Math.min((time - start) / duration, 1);
            const current = Math.floor(progress * target);
            counter.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        requestAnimationFrame(updateCounter);
    });
}

// Run counters when page loads
document.addEventListener('DOMContentLoaded', animateCounters);