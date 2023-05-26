const buttons = document.querySelectorAll('a')
buttons.forEach(btn => btn.addEventListener('click', verification))
function verification() {
    buttons.forEach(btn => btn != this ? btn.id = '' : btn.id = 'focus')
} 