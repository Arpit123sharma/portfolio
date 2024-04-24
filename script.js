const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function cursormove() {
    let circle = document.getElementById('minicircle');

    document.body.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX + window.scrollX;
        const mouseY = event.clientY + window.scrollY;

        circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
}
cursormove();

