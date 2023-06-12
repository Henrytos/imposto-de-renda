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
    tabela: [
        'SALARIO BRUTO MENSUAL', 'TASA', 'DEDUCCIÓN', 'de 0,00 hasta 1.903,98', 'Exento',
        'de 1.903,99 hasta 2.826,65',
        'de 2.826,66 hasta 3.751,05',
        'de 3.751,06 hasta 4.664,68',
        'a partir de 4.664,68'
    ]
}
const LanguageEnglish = {
    titles: ['Income Tax', 'What is Income Tax (IRPF)?', 'Income Tax Table', 'Location', 'How does Income Tax calculation work?', 'Frequently Asked Questions'],
    texts: ["Income Tax for Individuals (IRPF) is a tax imposed by the Federal Revenue Service on the income of an individual and is proportional to the amount of that income.", "Regarding the worker's salary, the Income Tax rate to be paid depends on the salary range and the number of dependents.", "To calculate the monthly amount of IRPF to be paid on the salary, these two factors must be taken into consideration.", "Below, you can check the Income Tax table according to each salary range:", "The Deduction column indicates the maximum amount that can be deducted from the Income Tax in the Annual Declaration if you have incurred deductible expenses.", "Therefore, since the government aims to provide healthcare, education, etc. to the population, all expenses you have in these areas can be deducted from the tax you pay.", "Nevertheless, the Income Tax rate is already deducted from your paycheck, and the amount you receive is already net of taxes.", "Welcome to our income tax declaration company! We are happy to assist you in navigating the complex world of taxes and ensuring that you fulfill your tax obligations efficiently and accurately.", "Our company has years of experience in the industry, and our team of accounting experts is ready to assist you at every step of the income tax declaration process. We understand that each situation is unique, which is why we are dedicated to providing personalized service to meet your specific needs.", "Here at our income tax declaration company, we understand that tax compliance is crucial. Our location section is designed to help you make informed decisions and ensure that you comply with applicable tax laws. Trust our services to simplify the income tax declaration process and minimize the stress associated with taxes.", "Contact us today for more information about our services or to schedule a consultation with one of our accounting experts. We look forward to helping you achieve your financial goals and ensuring your tax peace of mind.", "To calculate the Income Tax base, certain deductions need to be made from the gross salary, which are:", "This will give us the amount on which the Income Tax rate will apply. After all these deductions, we will have the net salary.", "It is important to remember that this tax is applicable whenever a person receives income, not necessarily a salary. Therefore, the Income Tax applies to:", "Income Tax is paid by those who earn a salary above R$ 1,903.98 per month or those who have earned profits from investments that are not exempt.", "To calculate Income Tax for 2023, use the Mobills Income Tax Calculator.", "In the calculator, you will enter your gross salary and the number of legal dependents you have. This will give you the amount to be paid in Income Tax.", "Late filers are subject to a fine.", "According to the Federal Revenue Service, the fine is 1% per month on the tax due, capped at 20% of the amount due to be paid. Additionally, the minimum fine amount is R$ 165.74."
    ],
    links: ['TABLE', 'LOCATION', 'FAQ', 'CALCULATOR'],
    list: ['Contribution to INSS;',
        'Number of legal dependents (R$ 189.59 per dependent);',
        'Alimony (for those who pay it).',
        'Salary above the established limit;',
        'Vacation and 13th salary;',
        'Benefits such as profit sharing, bonuses, retirement, unemployment insurance, etc.'
    ],
    listDoubts: [
        '1st batch: May 31',
        '2nd batch: June30',
        '3rd batch: July 30',
        '4th batch: August 31',
        '5th batch: September 30',
        '1st residual batch: October 29',
        '2nd residual batch: November 30',
        '3rd residual batch: December 30.'
    ],
    tabela: [
        'MONTHLY GROSS SALARY', 'TAX RATE', 'DEDUCTION', 'from 0.00 to 1,903.98', 'Exempt',
        'from 1,903.99 to 2,826.65',
        'from 2,826.66 to 3,751.05',
        'from 3,751.06 to 4,664.68',
        'over 4,664.68'
    ]
}
const LanguageMandarin = {
    titles: ['所得税', '什么是所得税（个人所得税）？', '所得税表', '地点', '所得税如何计算？', '常见问题'],
    texts: ["个人所得税（个人所得税）是由联邦税务局对个人收入征收的税款，与收入金额成比例。", "关于工人的工资，应缴纳的个人所得税税率取决于工资范围和扶养人数。", "要计算应缴纳的个人所得税月度金额，必须考虑这两个因素。", "以下是根据每个工资范围的所得税表：", "扣除列指示如果您有可扣除的费用，最多可以从年度申报中扣除的金额。", "因此，由于政府的目标是为人民提供医疗保健、教育等，您在这些领域的所有支出都可以从您所缴纳的税款中扣除。", "尽管如此，个人所得税税率已从您的工资中扣除，您获得的金额已经净扣除了税款。", "欢迎来到我们的个人所得税申报公司！我们很高兴协助您在复杂的税收世界中导航，并确保您高效准确地履行税务义务。", "我们的公司在这个行业有多年的经验，我们的会计专家团队随时准备协助您完成个人所得税申报过程的每一步。我们理解每个情况都是独特的，因此我们致力于提供量身定制的服务，以满足您的特定需求。", "在我们的个人所得税申报公司，我们了解税务合规的重要性。我们的地点部分旨在帮助您做出明智决策，确保您遵守适用的税法。请放心使用我们的服务，简化个人所得税申报流程，并将与税收相关的压力最小化。", "请即刻与我们联系，以获取有关我们的服务的更多信息，或预约与我们的会计专家之一进行咨询。我们期待帮助您实现财务目标并确保您的税务安宁。", "要计算个人所得税的计算基数，需要从总工资中扣除某些费用，这些费用包括：", "这将得到个人所得税税率适用的金额。在所有这些扣除之后，我们将得到净工资。", "重要的是要记住，个人所得税适用于个人获得的任何收入，不仅仅是工资。因此，个人所得税适用于以下情况：", "工资超过每月1, 903.98美元的人；或者通过投资获得的利润不享受免税待遇的人。", "要计算2023年的个人所得税，请使用Mobills个人所得税计算器。", "在计算器中，您将输入您的总工资和您拥有的合法扶养人数。这将给出您应缴纳的个人所得税金额。", "逾期申报者将受到罚款。", "根据联邦税务局的规定，罚款金额为应缴税款的1 %，上限为应缴款项的20 %。此外，罚款的最低金额为165.74美元。"
    ],
    links: ['表格', '位置', '常见问题', '计算器'],
    list: ['缴纳社会保险费；',
        '法定扶养人数（每人189.59美元）；',
        '支付的赡养费（适用于付费方）。',
        '超过规定限额的工资；',
        '假期和第13薪水；',
        '福利，如分红、奖金、退休金、失业保险等。'
    ],
    listDoubts: [
        '第一批次：5月31日',
        '第二批次：6月30日',
        '第三批次：7月30日',
        '第四批次：8月31日',
        '第五批次：9月30日',
        '第一批次残余：10月29日',
        '第二批次残余：11月30日',
        '第三批次残余：12月30日。'
    ],
    tabela: [
        '每月总工资', '税率', '扣除金额', '0.00至1,903.98', '免税',
        '1,903.99至2,826.65',
        '2,826.66至3,751.05',
        '3,751.06至4,664.68',
        '超过4,664.68'
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
