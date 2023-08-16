export const handleAnchorClick = (event, section) => {
    event.preventDefault();
    const element = document.querySelector(section);

    const allAnchors = document.querySelectorAll('.desktop--menu a');
    allAnchors.forEach(anchor => {
        anchor.classList.remove('active');
    });
    const allAnchor = document.querySelectorAll('.nav--responsive a');
    allAnchor.forEach(anchor => {
        anchor.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};