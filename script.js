// Add smooth scrolling and interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation for badge cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initially hide badge cards for animation
    const badgeCards = document.querySelectorAll('.badge-card');
    badgeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add click tracking for badge links
    const badgeLinks = document.querySelectorAll('.badge-link');
    badgeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle animation when clicking badge links
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover effect for stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add a simple function to copy profile URL
function copyProfileURL() {
    const url = 'https://www.futureskillsprime.in/iDH/fsp/user/rich-profile/in';
    navigator.clipboard.writeText(url).then(() => {
        // Could add a toast notification here
        console.log('Profile URL copied to clipboard');
    });
}