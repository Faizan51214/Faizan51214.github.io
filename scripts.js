// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects for skills
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.05)';
        skill.style.transition = 'transform 0.3s ease';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});