const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', verificationBtnHover))
function verificationBtnHover() {
    buttons.forEach(btn => btn != this ? btn.id = '' : btn.id = 'focus')
}
const fotterIcons = document.querySelectorAll('footer > span > a')
fotterIcons.forEach(icon => icon.addEventListener('mouseenter', fotterHover))
fotterIcons.forEach(icon => icon.addEventListener('mouseleave', fotterNoHover))
function fotterHover() {
    const textIcon = document.createElement('span')
    textIcon.innerText = this.id
    textIcon.id = `icon.${this.id}`
    textIcon.classList = 'text-social-midia'
    this.append(textIcon)
}
function fotterNoHover() {
    const icon = document.getElementById(`icon.${this.id}`)
    icon.remove()
}

let main = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let selectElement = ''
let bandeira = ''
console.log(main)
if (main > 1300) {
    selectElement = document.getElementById("idioma2")

    bandeira = document.getElementById('bandeiras2')
} else {
    selectElement = document.getElementById("idioma")

    bandeira = document.getElementById('bandeiras')
}


let click = 0
selectElement.addEventListener("click", function () {
    let selectedOption = selectElement.options[selectElement.selectedIndex];

    click++
    if (selectedOption.value !== '' && click % 2 == 0) {
        bandeira.src = `assets/imgs/bandeira/${selectedOption.value}.png`
        // console.log(bandeira)
        // console.log(selectedOption.value)
        // console.log("Opção selecionada: " + selectedOption.text + " valor: " + selectedOption.value)
        colorTextLeanguage(selectedOption)
        switchLenguage(selectedOption.value)
    }
})

function colorTextLeanguage(selectedOption) {

    switch (selectedOption.value) {
        case "Português":
            selectElement.style.color = "#4caf50";

            break;

        case "Inglês":
            selectElement.style.color = "#3F51B5";

            break;

        case "Espanhol":
            selectElement.style.color = "#FFC107";

            break;

        case "Mandarin":
            selectElement.style.color = "#FF3D00";

            break;

    }
}
function switchLenguage(selectedValue) {
    console.log(selectedValue)

}

let titleDoubts = document.querySelectorAll('main > section > section > article')

titleDoubts.forEach(title => title.addEventListener('click', viewDoubts))

function viewDoubts() {

    let selectedDoubt = document.querySelector(`#${this.id}>div`)
    if (selectedDoubt.style.display == 'inline') {
        selectedDoubt.style.display = 'none'
    }
    else {
        selectedDoubt.style.display = 'inline'

    }

}

const switchTheme = document.querySelectorAll('.switch-theme')
switchTheme.forEach(buttonTheme => buttonTheme.addEventListener('click', switchThemeDarkLigth))
let i = 0
function switchThemeDarkLigth() {
    if (i % 2 == 0) {
        document.documentElement.style.setProperty('--color-litgh', '#000')
        document.documentElement.style.setProperty('--color-dark', '#f5f5f5')
        document.documentElement.style.setProperty('--glasmorfismo-links', 'rgba(0, 0, 0, 0.16)')
        document.documentElement.style.setProperty('--bg-color', 'rgba(265, 265, 265, 0.36)')
        document.querySelector('header>div>div>img').src = 'assets/imgs/logo-leão-ligth.png'

    }
    else {
        document.documentElement.style.setProperty('--color-litgh', '#f5f5f5')
        document.documentElement.style.setProperty('--color-dark', '#000')
        document.documentElement.style.setProperty('--glasmorfismo-links', 'rgba(255, 255, 255, 0.16)')
        document.documentElement.style.setProperty('--bg-color', 'rgba(38, 38, 38, 0.46)')
        document.querySelector('header>div>div>img').src = 'assets/imgs/logo-leão-dark.png'

    }

    i++

}