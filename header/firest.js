window.addEventListener("load", function(){
    const togglBtn = document.querySelector('.navbar_toggl');
    const menu = document.querySelector('.navbar_menu');
    const icon = document.querySelector('.navbar_icons');

    togglBtn.onclick = function(){
        menu.classList.toggle('active');
        icon.classList.toggle('active');
    }
})