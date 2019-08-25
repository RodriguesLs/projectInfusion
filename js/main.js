(function() {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
    
    var $btnMenu = document.querySelector('.header__btn');
    $btnMenu.removeAttribute('style');

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btn',
        widthEnabled: 1024
    })
})();