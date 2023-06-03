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


const selectElement = document.getElementById("idioma")

const bandeira = document.getElementById('bandeiras')

let click = 0
selectElement.addEventListener("click", function () {
    let selectedOption = selectElement.options[selectElement.selectedIndex];

    click++
    if (selectedOption.value !== '' && click % 2 == 0) {
        bandeira.src = `assets/imgs/bandeira/${selectedOption.value}.png`
        console.log("Opção selecionada: " + selectedOption.text + " valor: " + selectedOption.value)
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
            textLeanguage.style.color = "#3F51B5";

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