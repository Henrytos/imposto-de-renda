<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registre-se</title>
   <link rel="stylesheet" href="./style.css">
    <link rel="shortcut icon" href="./assets/imgs/calc.png" type="image/x-icon">
</head>

<body>
    <section>
        <h1>Cálculo de Imposto de Renda</h1>
        <form method="POST">
            <label for="wage">Salário bruto:</label>
            <input type="number" name="wage" id="wage">
            <button type="submit" name="calcular">Calcular</button>
        </form>

    </section>
    <?php


if(isset($_POST ["calcular"])){
    $salario = $_POST["wage"];
    $ir=0;
    $aliquota=0;
    

    if($salario<1903.98){ 
       
    }
    else if($salario<2826.65 ){
        $aliquota=$salario *0.075;
        $ir= $salario-$aliquota;
    }

    else if($salario<3751.05 ){
        $aliquota=$salario *0.15;
        $ir= $salario-$aliquota;
    }

    else if($salario<4664.68 ){
        $aliquota=$salario *0.225;
        $ir= $salario-$aliquota; 
    }

    else {
        $aliquota=$salario *0.275;
        $ir= $salario-$aliquota;
    }
}
?>


<section>
<table>
    <thead>
        <th>Sálario Bruto</th>
        <th>Dedução</th>
        <th>Sálario Liquido</th>
    </thead>
    <tr>
<td> <?php echo("R$".$salario);?></td>        
<td> <?php echo("R$".$aliquota);?></td>        
<td> <?php echo("R$".$ir);?></td>
    </tr>
</table>
</section>
</body>

</html>