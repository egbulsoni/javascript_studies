function mostraSalario(objList){
    aux = "";
    for (i = 0; i < objList.length; i++){
        aux = aux + "Funcionario: " + objList[i].nome + " --> Salario total: " + calculaSalario(objList[i]) +"<br>";
    }
    return aux;

}

function calculaSalario(obj){
    var total = obj.salarioHora * obj.qtHoras;
    return total;
}

function salariosExtremos(objList){
    //retornar o nome dos funcionarios de maior e menor salario
    var final = "";
    var maior = "";
    var menor = "";
    var salMaior = 0;
    var salMenor = 0;
    var check = 0;
    for (i = 0; i < objList.length; i++){
        check = calculaSalario(objList[i]);
        if (i == 0){
            maior = objList[i].nome;
            menor = objList[i].nome;
            salMaior = check;
            salMenor = check;
            continue;
        }

        if (check > salMaior){
            maior = objList[i].nome;
            salMaior = check;            
        }

        if (check < salMenor){
            menor = objList[i].nome;
            salMenor = check;    
        }
    }
    final = "<br><br>funcionario de menor salario: " + menor + " com salario: "
            + salMenor + "<br> funcionario de maior salario: " + maior
            + " com salario: " + salMaior;
    return final;
}

function mediaHorasTrabalhadas(objList){
    total = 0;
    for (i = 0; i < objList.length; i++){
        total += objList[i].qtHoras;
    }
    total /= objList.length;
    return "<br><br>" + total;
}

function mediaSalarios(objList){
    total = 0;
    for (i = 0; i < objList.length; i++){
        total += objList[i].salarioHora;
    }
    total /= objList.length;
    return "<br><br>" + total;
}

function teste(){
    document.write(mostraSalario(carga));
    document.write(salariosExtremos(carga));
    document.write(mediaHorasTrabalhadas(carga));
    document.write(mediaSalarios(carga));
    
}

var carga = 
[{"nome":"NOMEFUNC0","salarioHora":25.60,
"qtHoras":25}
,{"nome":"NOMEFUNC1","salarioHora":15.99,
"qtHoras":80}
,{"nome":"NOMEFUNC2","salarioHora":5.60,
"qtHoras":100}
,{"nome":"NOMEFUNC3","salarioHora":78.50,
"qtHoras":50}
,{"nome":"NOMEFUNC4","salarioHora":25.60,
"qtHoras":70}
,{"nome":"NOMEFUNC5","salarioHora":58.44,
"qtHoras":20}
,{"nome":"NOMEFUNC6","salarioHora":17,
"qtHoras":80}
,{"nome":"NOMEFUNC7","salarioHora":9.99,
"qtHoras":70}
,{"nome":"NOMEFUNC8","salarioHora":40,
"qtHoras":100}];