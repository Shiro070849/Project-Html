document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('show');
    });
});
