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


selectElement.addEventListener("click", function () {
    let selectedOption = selectElement.options[selectElement.selectedIndex];


    bandeira.src = `./assets/imgs/bandeira/${selectedOption.value}.png`
    // console.log(bandeira)
    // console.log(selectedOption.value)
    // console.log("Opção selecionada: " + selectedOption.text + " valor: " + selectedOption.value)
    colorTextLeanguage(selectedOption)
    switchLenguage(selectedOption.value)

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

        case "mandarin":
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
// ['O que é Imposto de Renda ?'
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




const Português = {
    title: ['Imposto de renda'],
    subTitles: ['O que é Imposto de Renda (IRPF)?', 'Tabela de Imposto de Renda', 'Local', 'Como funciona o cálculo do Imposto de Renda', 'Dúvidas frequentes sobre o assunto'],
    texts: ["O Imposto de Renda Pessoa Física (IRPF) é um tributo cobrado pela Receita Federal sobre os rendimentos de uma Pessoa Física e é proporcional ao volume desses rendimentos.", "No que diz respeito ao salário do trabalhador, a alíquota de Imposto de Renda a ser paga depende da faixa salarial e do número de dependentes.", "Nesse sentido, para calcular o valor a ser pago mensalmente de IRPF sobre o salário, é preciso levar em consideração estes dois fatores.", "A seguir, você pode conferir a tabela de Imposto de Renda de acordo com cada faixa salarial:", "A coluna Dedução diz sobre o valor máximo a ser deduzido do Imposto de Renda na Declaração Anual caso você tenha gastado com despesas dedutíveis.", "Portanto, como o governo se propõe a oferecer saúde, educação etc. para a população, todo gasto que você tem com essas áreas pode ser abatido do valor que você paga de imposto.", "De todo modo, a alíquota a ser paga de Imposto de Renda já é descontada na sua folha de pagamento, e o valor que você recebe já é líquido de tributos.", "Bem-vindo à nossa empresa de declaração de imposto de renda! Estamos felizes em ajudar você a navegar pelo complexo mundo dos impostos e garantir que você cumpra suas obrigações fiscais de maneira eficiente e precisa.", "Nossa empresa tem anos de experiência no setor e nossa equipe de especialistas em contabilidade está pronta para auxiliá-lo em todas as etapas do processo de declaração de imposto de renda. Sabemos que cada situação é única, e é por isso que nos dedicamos a fornecer um serviço personalizado para atender às suas necessidades específicas.", "Aqui na nossa empresa de declaração de imposto de renda, sabemos que a conformidade fiscal é fundamental. Nossa seção de local foi criada para ajudá-lo a tomar decisões informadas e garantir que você esteja em conformidade com as leis fiscais aplicáveis. Confie em nossos serviços para simplificar o processo de declaração de imposto de renda e minimizar o estresse relacionado aos impostos.", "Entre em contato conosco hoje mesmo para obter mais informações sobre nossos serviços ou para agendar uma consulta com um de nossos especialistas em contabilidade. Estamos ansiosos para ajudá-lo a atingir seus objetivos financeiros e garantir sua tranquilidade fiscal.", "Para se chegar à base de cálculo do Imposto de Renda, é preciso fazer algumas deduções no salário bruto, que são:", "Assim, chegaremos ao valor sobre o qual a alíquota de IRPF vai incidir. Após todos esses descontos, teremos o salário líquido.", "É importante lembrar que esse imposto incide sempre que a pessoa recebe uma renda, não necessariamente um salário. Desse modo, o IR incide sobre:", "Paga Imposto de Renda quem tem salário acima de R$ 1.903,98 por mês ou quem teve lucro com seus investimentos que não são isentos.", "Para calcular o Imposto de Renda 2023, utilize a Calculadora de Imposto de Renda da Mobills.", "Nela, você vai informar seu salário bruto e o número de dependentes legais que você tem. Assim, você saberá o valor a ser pago em Imposto de Renda.", "Quem entregar, com atraso, a declaração está sujeito a multa.", "Segundo a Receita Federal, a multa é de 1% ao mês, sobre o tributo devido, limitado a 20% do valor devido a ser pago. Ademais, o valor mínimo da multa é de R$ 165,74."
    ],
    links: ['TABELA', 'LOCAL', 'DÚVIDAS', 'CALCULADORA'],
    list: [
        'Contribuição para o INSS;',
        'Número de dependentes legais (R$ 189,59 por cada um);',
        'Pensão alimentícia (no caso de quem paga).',
        'Salário acima do limite estabelecido;',
        'Férias e 13º;',
        'Benefícios, como participação no lucro, bonificação, aposentadoria, seguro- desemprego etc.',
    ], doubts: [
        'Quem tem que pagar Imposto de Renda?',
        'Como calcular Imposto de Renda 2023?',
        'Quais as datas da restituição do Imposto de Renda 2023?',
        'O que acontece com quem não declarar o Imposto de Renda?'
    ],
    listDoubts: [
        '1º lote: 31 de maio',
        '2º lote: 30 de junho',
        '3º lote: 30 de julho',
        '4º lote: 31 de agosto',
        '5º lote: 30 de setembro',
        '1º lote residual: 29 de outubro',
        '2º lote residual: 30 de novembro',
        '3º lote residual: 30 de dezembro.'
    ],
    th: [

        'SALÁRIO BRUTO MENSAL', 'ALÍQUOTA', 'DEDUÇÃO'
    ],
    td: [
        'de 0,00 até 1.903,98', 'Isento', '0,00',
        'de 1.903,99 até 2.826,65', '7,50 %', '142,80',
        'de 2.826,66 até 3.751,05', '15,00 % ', '354,80',
        'de 3.751,06 até 4.664,68', '22,50 %', '636,13',
        'a partir de 4.664,68', '27,50 %', '869,36'
    ],
    figcaption: ['Video de Imposto de Renda', 'Tabela de Imposto de Renda', 'Localização do Banco', 'Localização do Banco']


}
const Espanhol = {
    title: ['Impuesto sobre la renta'],
    subTitles: ['¿Qué es el Impuesto sobre la Renta ?', 'Tabla del Impuesto sobre la Renta', 'Localización', 'Cómo funciona el cálculo del Impuesto sobre la Renta', 'Preguntas frecuentes sobre el tema'],
    texts: ["El Impuesto sobre la Renta de las Personas  es un impuesto que cobra la Agencia Tributaria sobre los ingresos de una Persona Física y es proporcional al volumen de dichos ingresos.", "En lo que respecta al salario del trabajador, la tasa del Impuesto sobre la Renta a pagar depende del tramo salarial y del número de dependientes.", "En este sentido, para calcular el valor a pagar mensualmente de IRPF sobre el salario, es necesario tener en cuenta estos dos factores.", "A continuación, puedes consultar la tabla del Impuesto sobre la Renta según cada tramo salarial:", "La columna de Deducción indica el valor máximo que se puede deducir del Impuesto sobre la Renta en la Declaración Anual en caso de haber incurrido en gastos deducibles.", "Por lo tanto, dado que el gobierno se compromete a ofrecer salud, educación, etc. a la población, todos los gastos que realices en estas áreas pueden deducirse del impuesto que pagas.", "De todos modos, la tasa del Impuesto sobre la Renta ya se descuenta de tu nómina y el valor que recibes ya es neto de impuestos.", "¡Bienvenido a nuestra empresa de declaración de impuestos sobre la renta! Estamos felices de ayudarte a navegar por el complejo mundo de los impuestos y asegurarnos de que cumplas con tus obligaciones fiscales de manera eficiente y precisa.", "Nuestra empresa tiene años de experiencia en el sector y nuestro equipo de expertos en contabilidad está listo para ayudarte en todas las etapas del proceso de declaración de impuestos sobre la renta. Sabemos que cada situación es única, por lo que nos dedicamos a brindar un servicio personalizado que satisfaga tus necesidades específicas.", "Aquí en nuestra empresa de declaración de impuestos sobre la renta, sabemos que el cumplimiento fiscal es fundamental. Nuestra sección de localización se creó para ayudarte a tomar decisiones informadas y garantizar que cumplas con las leyes fiscales aplicables. Confía en nuestros servicios para simplificar el proceso de declaración de impuestos sobre la renta y minimizar el estrés relacionado con los impuestos.", "Ponte en contacto con nosotros hoy mismo para obtener más información sobre nuestros servicios o para concertar una consulta con uno de nuestros expertos en contabilidad. Estamos ansiosos por ayudarte a alcanzar tus objetivos financieros y garantizar tu tranquilidad fiscal.", "Para llegar a la base de cálculo del Impuesto sobre la Renta, es necesario realizar algunas deducciones en el salario bruto, que son:", "De esta manera, obtendremos el valor sobre el cual se aplicará la tasa del IRPF. Después de todas estas deducciones, tendremos el salario neto.", "Es importante recordar que este impuesto se aplica siempre que la persona recibe un ingreso, no necesariamente un salario. Por lo tanto, el IR se aplica sobre:", "Paga Impuesto sobre la Renta aquel que tiene un salario superior a R$1.903,98 por mes o aquel que ha obtenido ganancias con sus inversiones que no están exentas.", "Para calcular el Impuesto sobre la Renta 2023, utiliza la Calculadora de Impuesto sobre la Renta de Mobills.", "En ella, deberás ingresar tu salario bruto y el número de dependientes legales que tienes. Así sabrás el monto a pagar en Impuesto sobre la Renta.", "Quienes presenten la declaración con retraso están sujetos a una multa.", "Según la Agencia Tributaria, la multa es del 1% mensual sobre el impuesto adeudado, con un límite del 20% del valor adeudado a pagar. Además, el importe mínimo de la multa es de R$ 165,74."
    ],
    links: ['TABLA', 'LOCALIZACIÓN', 'DUDAS', 'CALCULADORA'],
    list: ['Contribución al INSS;',
        'Número de dependientes legales (R$ 189,59 por cada uno);',
        'Pensión alimenticia (en el caso de quien paga).',
        'Salario por encima del límite establecido;',
        'Vacaciones y 13º;',
        'Beneficios como participación en las ganancias, bonificación, jubilación, seguro de desempleo, etc.'
    ], doubts: ['¿Quién tiene que pagar el Impuesto a la Renta ?',
        '¿Cómo calcular el Impuesto a la Renta 2023 ?',
        '¿Cuáles son las fechas de devolución del Impuesto sobre la Renta 2023 ?',
        '¿Qué pasa con los que no declaran el Impuesto a la Renta ?'],
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
    th: [
        'SALARIO BRUTO MENSUAL', 'TASA', 'DEDUCCIÓN'
    ],
    td: ['de 0,00 hasta 1.903,98', 'Exento', '	0,00',
        'de 1.903,99 hasta 2.826,65', '7, 50 %', ' 142, 80',
        'de 2.826,66 hasta 3.751,05', '15,00 %', '354, 80',
        'de 3.751,06 hasta 4.664,68', '22, 50 % ', '636, 13',
        'a partir de 4.664,68', '27, 50 %', '869, 36'],
    figcaption: ['Video de impuestos sobre la renta', 'Tabla de impuestos sobre la renta', 'Ubicación del banco', 'Ubicación del banco']
}
const Inglês = {
    title: ['Income Tax'],
    subTitles: ['What is Income Tax ?', 'Income Tax Table', 'Location', 'How does Income Tax calculation work?', 'Frequently Asked Questions'],
    texts: ["Income Tax on  is a tax collected by the Tax Agency on the income of an individual and is proportional to the volume of such income.", "Regarding the worker's salary, the rate of Income Tax to be paid depends on the salary bracket and the number of dependents.", "To calculate the monthly amount of Income Tax to be paid on the salary, these two factors must be taken into account.", "Below you can find the Income Tax table according to each salary bracket:", "The Deduction column indicates the maximum value that can be deducted from the Income Tax in the Annual Declaration in case of deductible expenses.", "Therefore, since the government is committed to providing healthcare, education, etc. to the population, all expenses incurred in these areas can be deducted from the tax you pay.", "However, the rate of Income Tax is already deducted from your paycheck, and the amount you receive is already net of taxes.", "Welcome to our income tax declaration company! We are happy to help you navigate the complex world of taxes and ensure that you fulfill your tax obligations efficiently and accurately.", "Our company has years of experience in the sector, and our team of accounting experts is ready to assist you in all stages of the income tax declaration process. We know that each situation is unique, so we are dedicated to providing personalized service that meets your specific needs.", "Here in our income tax declaration company, we know that tax compliance is crucial. Our location section was created to help you make informed decisions and ensure compliance with applicable tax laws. Trust our services to simplify the income tax declaration process and minimize tax-related stress.", "Contact us today for more information about our services or to schedule a consultation with one of our accounting experts. We look forward to helping you achieve your financial goals and ensuring your tax peace of mind.", "To calculate the Income Tax base, it is necessary to make some deductions from the gross salary, which are:", "In this way, we will obtain the value on which the Income Tax rate will be applied. After all these deductions, we will have the net salary.", "It is important to remember that this tax is applied whenever a person receives income, not necessarily a salary. Therefore, Income Tax is applied to:", "Income Tax is paid by those who have a salary higher than R$1,903.98 per month or those who have earned income from investments that are not exempt.", "To calculate Income Tax 2023, use the Mobills Income Tax Calculator.", "In it, you must enter your gross salary and the number of legal dependents you have. This way, you will know the amount to be paid in Income Tax.", "Those who file the declaration late are subject to a fine.", "According to the Tax Agency, the fine is 1% per month on the tax owed, with a limit of 20% of the owed value to be paid. In addition, the minimum amount of the fine is R$ 165.74."
    ],
    links: ['TABLE', 'LOCATION', 'DOUBTS', 'CALCULATOR'],
    list: ['INSS Contribution;',
        'Number of legal dependents (R$ 189.59 for each one);',
        'Alimony (in the case of the payer).',
        'Salary above the established limit;',
        'Vacations and 13th salary;',
        'Benefits such as profit sharing, bonuses, retirement, unemployment insurance, etc.'
    ],
    doubts: ['Who has to pay Income Tax?',
        'How to calculate Income Tax 2023?',
        'What are the 2023 Income Tax return dates?',
        'What happens to those who do not declare Income Tax?'],
    listDoubts: [
        ' 1st batch: May 31',
        '2nd batch: June 30',
        '3rd batch: July 30',
        '4th batch: August 31',
        '5th batch: September 30',
        '1st batch residual: October 29',
        '2nd residual batch: November 30',
        '3rd residual lot: December 30.'
    ],
    th: [
        'MONTHLY GROSS SALARY', 'RATE', 'DEDUCTION'
    ],
    td: [
        'from 0.00 to 1,903.98', 'Exempt', '0.00',
        'from 1,903.99 to 2,826.65', '7.50%', '142.80',
        'from 2,826.66 to 3,751.05', '15.00%', '354.80',
        'from 3,751.06 to 4,664.68', '22.50%', '636.13',
        'above 4,664.68', '27.50%', '869.36'
    ],
    figcaption: ['Income Tax Video', 'Income Tax Table', 'Bank Location', 'Bank Location']
}
const mandarin = {
    title: ['仁达的冒名顶替'],
    subTitles: ['什么是所得税？', '所得税表', '当地的', '所得税如何计算？', '有关该主题的常见问题'],
    texts: [
        '个人所得税 是联邦税务局对个人收入征收的税种,与此类收入的数量成正比。',
        '关于工人的工资,要缴纳的所得税税率取决于工资范围和受抚养人的数量。',
        '从这个意义上讲,要计算IRPF每月应支付的工资数额,有必要考虑这两个因素。',
        '下面,您可以查看各个薪资区间的所得税表:',
        '如果您花费了可扣除的费用,Deduction 栏会告诉您年度申报中可从所得税中扣除的最高金额。',
        '因此,正如政府提出提供医疗、教育等。对于人口,您在这些领域的所有费用都可以从您缴纳的税款中扣除。',
        '在任何情况下,要支付的所得税税率已经从您的工资单中扣除,您收到的金额已经扣除税款。',
        '欢迎来到我们的所得税申报公司！我们很乐意帮助您驾驭复杂的税务世界,并确保您高效准确地履行纳税义务。',
        '我们公司在该行业拥有多年​​经验,我们的会计专家团队随时准备协助您完成报税流程的每一步。我们知道每种情况都是独一无二的,这就是为什么我们致力于提供个性化服务以满足您的特定需求。',
        '在我们的税务申报公司,我们知道税务合规是关键。我们的位置部分旨在帮助您做出明智的决定,并确保您遵守适用的税法。相信我们的服务可以简化报税流程并最大程度地减少税务相关压力。',
        '立即联系我们,了解有关我们服务的更多信息,或安排与我们的一位会计专家进行咨询。我们期待帮助您实现您的财务目标并确保您的财务安心。',
        '为了得出所得税计算基数,有必要从工资总额中扣除一些,它们是:',
        '因此,我们将得出适用 IRPF 率的值。在所有这些折扣之后,我们将获得净工资。',
        '重要的是要记住,只要此人收到收入而不一定是薪水,就会征收此税。通过这种方式, 被征收:',
        '所得税支付给每月工资超过 1,903.98 雷亚尔的人或通过不免税的投资获利的人。',
        '要计算 2023 年所得税,请使用 Mobills 所得税计算器。',
        '在其中,您将告知您的总工资和您拥有的合法受抚养人的人数。因此,您将知道要缴纳的所得税金额。',
        '任何迟交声明的人都将被处以罚款。',
        '根据联邦税务局的规定,罚款为每月 1%,按应缴税款计算,最高为应缴税款的 20%。此外,罚款的最低金额为 165.74 雷亚尔。'
    ],

    links: ['表格', '位置', '疑问', '计算器'],
    list: ['INSS贡献;',
        '法定受抚养人人数（每人 189.59 雷亚尔）；',
        '赡养费（在付款人的情况下）。',
        '工资超过规定限额；',
        '休假和第 13 薪水;',
        '利润分享、奖金、退休金、失业保险等福利。'
    ],
    doubts: ['谁必须缴纳所得税？',
        '如何计算 2023 年所得税？',
        '2023 年所得税申报日期是什么时候？',
        '那些不申报所得税的人会怎样？'],
    listDoubts: [
        '第一批:5月31日',
        '第二批:6月30日',
        '第三批:7月30日',
        '第四批:8月31日',
        '第五批:9月30日',
        '第一个剩余批次:10 月 29 日',
        '第二批剩余:11月30日',
        '第 3 个剩余批次:12 月 30 日。'
    ],
    th: [
        '每月总工资', '费率', '扣除'
    ],

    td: [
        '从 0.00 到 1,903.98', '豁免', '0.00',
        '从 1,903.99 到 2,826.65', '7.50%', '142.80',
        '从 2,826.66 到 3,751.05', '15.00%', '354.80',
        '从 3,751.06 到 4,664.68', '22.50%', '636.13',
        '高于 4, 664.68', '27.50 %', '869.36'
    ],
    figcaption: ['所得税视频', '所得税表', '银行位置', '银行位置']
}

function switchLenguage(idioma) {
    // Espanhol
    // mandarin
    // Português
    // Inglês
    switch (idioma) {

        case "Português":
            title.innerText = Português.title
            subTitles.forEach((title, i) => { title.innerText = Português.subTitles[i] })
            textPage.forEach((text, i) => { text.innerText = Português.texts[i] })
            navLinks.forEach((navLink, i) => { navLink.innerText = Português.links[i] })
            navLinksMobile.forEach((navLink, i) => { navLink.innerText = Português.links[i] })
            list.forEach((li, i) => { li.innerText = Português.list[i] })
            listDoubts.forEach((li, i) => { li.innerText = Português.listDoubts[i] })
            th.forEach((thTable, i) => thTable.innerText = Português.th[i])
            td.forEach((tdTable, i) => tdTable.innerText = Português.td[i])
            doubtsTitles.forEach((t, i) => { t.innerHTML = Português.doubts[i] + icon })
            figcaption.forEach((ele, i) => ele.innerText = Português.figcaption[i])
            break;

        case "Inglês":
            title.innerText = Inglês.title
            subTitles.forEach((title, i) => { title.innerText = Inglês.subTitles[i] })
            textPage.forEach((text, i) => { text.innerText = Inglês.texts[i] })
            navLinks.forEach((navLink, i) => { navLink.innerText = Inglês.links[i] })
            navLinksMobile.forEach((navLink, i) => { navLink.innerText = Inglês.links[i] })
            list.forEach((li, i) => { li.innerText = Inglês.list[i] })
            listDoubts.forEach((li, i) => { li.innerText = Inglês.listDoubts[i] })
            th.forEach((thTable, i) => thTable.innerText = Inglês.th[i])
            td.forEach((tdTable, i) => tdTable.innerText = Inglês.td[i])
            doubtsTitles.forEach((t, i) => { t.innerHTML = Inglês.doubts[i] + icon })
            figcaption.forEach((ele, i) => ele.innerText = Inglês.figcaption[i])
            break;

        case "Espanhol":
            title.innerText = Espanhol.title
            subTitles.forEach((title, i) => { title.innerText = Espanhol.subTitles[i] })
            textPage.forEach((text, i) => { text.innerText = Espanhol.texts[i] })
            navLinks.forEach((navLink, i) => { navLink.innerText = Espanhol.links[i] })
            navLinksMobile.forEach((navLink, i) => { navLink.innerText = Espanhol.links[i] })
            list.forEach((li, i) => { li.innerText = Espanhol.list[i] })
            listDoubts.forEach((li, i) => { li.innerText = Espanhol.listDoubts[i] })
            th.forEach((thTable, i) => thTable.innerText = Espanhol.th[i])
            td.forEach((tdTable, i) => tdTable.innerText = Espanhol.td[i])
            doubtsTitles.forEach((t, i) => { t.innerHTML = Espanhol.doubts[i] + icon })
            figcaption.forEach((ele, i) => ele.innerText = Espanhol.figcaption[i])
            break;

        case "mandarin":
            title.innerText = mandarin.title
            subTitles.forEach((title, i) => { title.innerText = mandarin.subTitles[i] })
            textPage.forEach((text, i) => { text.innerText = mandarin.texts[i] })
            navLinks.forEach((navLink, i) => { navLink.innerText = mandarin.links[i] })
            navLinksMobile.forEach((navLink, i) => { navLink.innerText = mandarin.links[i] })
            list.forEach((li, i) => { li.innerText = mandarin.list[i] })
            listDoubts.forEach((li, i) => { li.innerText = mandarin.listDoubts[i] })
            th.forEach((thTable, i) => thTable.innerText = mandarin.th[i])
            td.forEach((tdTable, i) => tdTable.innerText = mandarin.td[i])
            doubtsTitles.forEach((t, i) => { t.innerHTML = mandarin.doubts[i] + icon })
            figcaption.forEach((ele, i) => ele.innerText = mandarin.figcaption[i])
            break;
    }

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
        document.querySelector('header>div>div>img').src = './assets/imgs/logo-leão-ligth.png'

    }
    else {
        document.documentElement.style.setProperty('--color-litgh', '#f5f5f5')
        document.documentElement.style.setProperty('--color-dark', '#000')
        document.documentElement.style.setProperty('--glasmorfismo-links', 'rgba(255, 255, 255, 0.16)')
        document.documentElement.style.setProperty('--bg-color', 'rgba(38, 38, 38, 0.46)')
        document.querySelector('header>div>div>img').src = './assets/imgs/logo-leão-dark.png'

    }

    i++

}
const inputSize = document.querySelectorAll(".font-size > input[type=" + 'range' + "] ")
inputSize.forEach(input => input.addEventListener("change", textSize))

function textSize() {
    document.documentElement.style.setProperty('--font-size-text', `${this.value}px`)
    document.documentElement.style.setProperty('--font-size-sub-title', `${this.value * 1.5}px`)
    document.documentElement.style.setProperty('--font-size-title', `${this.value * 2}px`)
    document.documentElement.style.setProperty('--font-size-title-doutbs', `${this.value * 1.1}px`)
}

const btnAudio = document.querySelector('.show-audio')
let click = -1
btnAudio.addEventListener('click', function () {
    click++
    var audioElements = [
        new Audio('./audio/portugues/0.mp3'),
        new Audio('./audio/portugues/1.mp3'),
        new Audio('./audio/portugues/2.mp3'),
        new Audio('./audio/portugues/3.mp3'),
        new Audio('./audio/portugues/4.mp3'),
        new Audio('./audio/portugues/5.mp3'),
        new Audio('./audio/portugues/6.mp3'),
        new Audio('./audio/portugues/7.mp3')

    ];

    var audioWords = textPage

    audioWords.forEach(element => {
        element.addEventListener('mouseover', showMp3)
        element.addEventListener('mouseout', hideMp3)
    })
    function showMp3() {
        audioWords.forEach((ele, i) => {
            if (ele == this && click % 2 == 0) {
                this.classList.add('showAudio')
                audioElements[i].play()
            }
        })
    }
    function hideMp3() {
        audioWords.forEach((ele, i) => {
            if (ele == this && click % 2 == 0) {
                this.classList.remove('showAudio')
                audioElements[i].pause()
                audioElements[i].currentTime = 0;
            }
        })


    }

});
