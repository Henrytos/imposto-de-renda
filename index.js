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
const title = document.querySelector('header > div > div > span')
// [0,1,2,3] [TABELA ,LOCAL ,DÚVIDAS ,CALCULADORA]
const navLinks = document.querySelectorAll('nav>a')
// [0,1,2,3] [TABELA ,LOCAL ,DÚVIDAS ,CALCULADORA]
const navLinksMobile = document.querySelectorAll('.nav-list li a')
// [0,1,2,3,4] 
// ['O que é Imposto de Renda (IRPF)?'
// ,'Tabela de Imposto de Renda'
// ,'Local'
// ,'Como funciona o cálculo do Imposto de Renda'
// ,'Dúvidas frequentes sobre o assunto']
const subTitles = document.querySelectorAll('h2')
// [0-19] maioria dos texto em section e abouts
const textPage = document.querySelectorAll('p')
// [0,1] subtitulos 
const figcaption = document.querySelectorAll('figcaption')
// [0-5] li da section
const list = document.querySelectorAll('.container-3 li')
//[0-8] li das duvidas 
const listDoubts = document.querySelectorAll('.doubts-3 li')
//[0,1,2,3]    para deixar cetinha no final
// doubtsTitles.forEach(title => { title.innerHTML += icon })
let icon = '<i class="fa-solid fa-chevron-down"></i>'
const doubtsTitles = document.querySelectorAll('h4')
// tabela [0,1,2] titulo TH
const th = document.querySelectorAll('th')
// [0,1,3,6,9,12]
const td = document.querySelectorAll('td')




const LenguagePortugues = {
    titles: ['Imposto de renda', 'O que é Imposto de Renda (IRPF)?', 'Tabela de Imposto de Renda', 'Local', 'Como funciona o cálculo do Imposto de Renda', 'Dúvidas frequentes sobre o assunto'],
    texts: ["O Imposto de Renda Pessoa Física (IRPF) é um tributo cobrado pela Receita Federal sobre os rendimentos de uma Pessoa Física e é proporcional ao volume desses rendimentos.", "No que diz respeito ao salário do trabalhador, a alíquota de Imposto de Renda a ser paga depende da faixa salarial e do número de dependentes.", "Nesse sentido, para calcular o valor a ser pago mensalmente de IRPF sobre o salário, é preciso levar em consideração estes dois fatores.", "A seguir, você pode conferir a tabela de Imposto de Renda de acordo com cada faixa salarial: ", "A coluna Dedução diz sobre o valor máximo a ser deduzido do Imposto de Renda na Declaração Anual caso você tenha gastado com despesas dedutíveis.", "Portanto, como o governo se propõe a oferecer saúde, educação etc. para a população, todo gasto que você tem com essas áreas pode ser abatido do valor que você paga de imposto.", "De todo modo, a alíquota a ser paga de Imposto de Renda já é descontada na sua folha de pagamento, e o valor que você recebe já é líquido de tributos.", "Bem-vindo à nossa empresa de declaração de imposto de renda! Estamos felizes em ajudar você a navegar pelo complexo mundo dos impostos e garantir que você cumpra suas obrigações fiscais de maneira eficiente e precisa.", "Nossa empresa tem anos de experiência no setor e nossa equipe de especialistas em contabilidade está pronta para auxiliá-lo em todas as etapas do processo de declaração de imposto de renda. Sabemos que cada situação é única, e é por isso que nos dedicamos a fornecer um serviço personalizado para atender às suas necessidades específicas.", "Aqui na nossa empresa de declaração de imposto de renda, sabemos que a conformidade fiscal é fundamental. Nossa seção de local foi criada para ajudá-lo a tomar decisões informadas e garantir que você esteja em conformidade com as leis fiscais aplicáveis. Confie em nossos serviços para simplificar o processo de declaração de imposto de renda e minimizar o estresse relacionado aos impostos.", "Entre em contato conosco hoje mesmo para obter mais informações sobre nossos serviços ou para agendar uma consulta com um de nossos especialistas em contabilidade. Estamos ansiosos para ajudá-lo a atingir seus objetivos financeiros e garantir sua tranquilidade fiscal.", "Para se chegar à base de cálculo do Imposto de Renda, é preciso fazer algumas deduções no salário bruto, que são:", "Assim, chegaremos ao valor sobre o qual a alíquota de IRPF vai incidir. Após todos esses descontos, teremos o salário líquido.", "É importante lembrar que esse imposto incide sempre que a pessoa recebe uma renda, não necessariamente um salário. Desse modo, o IR incide sobre:", "Paga Imposto de Renda quem tem salário acima de R$ 1.903,98 por mês ou quem teve lucro com seus investimentos que não são isentos.", "Para calcular o Imposto de Renda 2023, utilize a Calculadora de Imposto de Renda da Mobills.", "Nela, você vai informar seu salário bruto e o número de dependentes legais que você tem. Assim, você saberá o valor a ser pago em Imposto de Renda.", "Quem entregar, com atraso, a declaração está sujeito a multa.", "Segundo a Receita Federal, a multa é de 1% ao mês, sobre o tributo devido, limitado a 20% do valor devido a ser pago. Ademais, o valor mínimo da multa é de R$ 165,74."],
    links: ['TABELA', 'LOCAL', 'DÚVIDAS', 'CALCULADORA'],
    list: ['Contribuição para o INSS;',
        'Número de dependentes legais(R$ 189, 59 por cada um);',
        'Pensão alimentícia(no caso de quem paga).',
        'Salário acima do limite estabelecido;',
        'Férias e 13º;',
        'Benefícios, como participação no lucro, bonificação, aposentadoria, seguro- desemprego etc.'
    ],
    listDoubts: [
        '1º lote: 31 de maio',
        '2º lote: 30 de junho',
        '3º lote: 30 de julho',
        '4º lote: 31 de agosto',
        '5º lote: 30 de setembro',
        '1º lote residual: 29 de outubro',
        '2º lote residual: 30 de novembro',
        '3º lote residual: 30 de dezembro.]'],
    tabela: [
        'SALÁRIO BRUTO MENSAL', 'ALÍQUOTA', 'DEDUÇÃO', 'de 0, 00 até 1.903, 98', 'Isento',
        'de 1.903, 99 até 2.826, 65	',
        'de 2.826, 66 até 3.751, 05	',
        'de 3.751, 06 até 4.664, 68',
        'a partir de 4.664, 68']
}
const LanguageSpanish = {
    titles: ['Impuesto sobre la renta', '¿Qué es el Impuesto sobre la Renta (IRPF)?', 'Tabla del Impuesto sobre la Renta', 'Localización', 'Cómo funciona el cálculo del Impuesto sobre la Renta', 'Preguntas frecuentes sobre el tema'],
    texts: ["El Impuesto sobre la Renta de las Personas Físicas (IRPF) es un impuesto que cobra la Agencia Tributaria sobre los ingresos de una Persona Física y es proporcional al volumen de dichos ingresos.", "En lo que respecta al salario del trabajador, la tasa del Impuesto sobre la Renta a pagar depende del tramo salarial y del número de dependientes.", "En este sentido, para calcular el valor a pagar mensualmente de IRPF sobre el salario, es necesario tener en cuenta estos dos factores.", "A continuación, puedes consultar la tabla del Impuesto sobre la Renta según cada tramo salarial:", "La columna de Deducción indica el valor máximo que se puede deducir del Impuesto sobre la Renta en la Declaración Anual en caso de haber incurrido en gastos deducibles.", "Por lo tanto, dado que el gobierno se compromete a ofrecer salud, educación, etc. a la población, todos los gastos que realices en estas áreas pueden deducirse del impuesto que pagas.", "De todos modos, la tasa del Impuesto sobre la Renta ya se descuenta de tu nómina y el valor que recibes ya es neto de impuestos.", "¡Bienvenido a nuestra empresa de declaración de impuestos sobre la renta! Estamos felices de ayudarte a navegar por el complejo mundo de los impuestos y asegurarnos de que cumplas con tus obligaciones fiscales de manera eficiente y precisa.", "Nuestra empresa tiene años de experiencia en el sector y nuestro equipo de expertos en contabilidad está listo para ayudarte en todas las etapas del proceso de declaración de impuestos sobre la renta. Sabemos que cada situación es única, por lo que nos dedicamos a brindar un servicio personalizado que satisfaga tus necesidades específicas.", "Aquí en nuestra empresa de declaración de impuestos sobre la renta, sabemos que el cumplimiento fiscal es fundamental. Nuestra sección de localización se creó para ayudarte a tomar decisiones informadas y garantizar que cumplas con las leyes fiscales aplicables. Confía en nuestros servicios para simplificar el proceso de declaración de impuestos sobre la renta y minimizar el estrés relacionado con los impuestos.", "Ponte en contacto con nosotros hoy mismo para obtener más información sobre nuestros servicios o para concertar una consulta con uno de nuestros expertos en contabilidad. Estamos ansiosos por ayudarte a alcanzar tus objetivos financieros y garantizar tu tranquilidad fiscal.", "Para llegar a la base de cálculo del Impuesto sobre la Renta, es necesario realizar algunas deducciones en el salario bruto, que son:", "De esta manera, obtendremos el valor sobre el cual se aplicará la tasa del IRPF. Después de todas estas deducciones, tendremos el salario neto.", "Es importante recordar que este impuesto se aplica siempre que la persona recibe un ingreso, no necesariamente un salario. Por lo tanto, el IR se aplica sobre:", "Paga Impuesto sobre la Renta aquel que tiene un salario superior a R$1.903,98 por mes o aquel que ha obtenido ganancias con sus inversiones que no están exentas.", "Para calcular el Impuesto sobre la Renta 2023, utiliza la Calculadora de Impuesto sobre la Renta de Mobills.", "En ella, deberás ingresar tu salario bruto y el número de dependientes legales que tienes. Así sabrás el monto a pagar en Impuesto sobre la Renta.", "Quienes presenten la declaración con retraso están sujetos a una multa.", "Según la Agencia Tributaria, la multa es del 1% mensual sobre el impuesto adeudado, con un límite del 20% del valor adeudado a pagar. Además, el importe mínimo de la multa es de R$ 165,74."
    ],
    links: ['TABLA', 'LOCALIZACIÓN', 'DUDAS', 'CALCULADORA'],
    list: ['Contribución al INSS;',
        'Número de dependientes legales (R$ 189,59 por cada uno);',
        'Pensión alimenticia (en el caso de quien paga).',
        'Salario por encima del límite establecido;',
        'Vacaciones y 13º;',
        'Beneficios como participación en las ganancias, bonificación, jubilación, seguro de desempleo, etc.'
    ],
    listDoubts: [
        '1er lote: 31 de mayo',
        '2do lote: 30 de junio',
        '3er lote: 30 de julio',
        '4to lote: 31 de agosto',
        '5to lote: 30 de septiembre',
        '1er lote residual: 29 de octubre',
        '2do lote residual: 30 de noviembre',
        '3er lote residual: 30 de diciembre.'
    ],
    tabla: [
        'SALARIO BRUTO MENSUAL', 'TASA', 'DEDUCCIÓN', 'de 0,00 hasta 1.903,98', 'Exento',
        'de 1.903,99 hasta 2.826,65',
        'de 2.826,66 hasta 3.751,05',
        'de 3.751,06 hasta 4.664,68',
        'a partir de 4.664,68'
    ]
}
function switchLenguage() {


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
const inputSize = document.querySelector(".font-size > input[type=" + 'range' + "] ")
inputSize.addEventListener("change", function (event) {
    console.log(inputSize.value)
});
