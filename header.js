document.addEventListener('DOMContentLoaded', showMenu);
function showMenu(){
    let $menuToggle = document.querySelector('.menuToggle');
    let $menu = document.querySelector('.menu');

    $menuToggle.addEventListener('click', function(){
        $menu.classList.toggle('active');
    });
}