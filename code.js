const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

const inputnumberButton = document.getElementById("inputnumberbutton");
inputnumberButton.addEventListener("click", clickNumberButton);

function clickButton(){

    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();
    
    try{
        
        fr.readAsText(arquivo.files[0]);
        fr.onload=function() {
            info = fr.result;
            document.getElementById('outputfile').textContent=fr.result;
        }

        var info = document.getElementById('outputfile').textContent;
        if(info == null){
            throw 'entre com um arquivo';
        }
    }
    catch(error){
        error = 'Erro + erro javascript'
        document.getElementById('outputnumber').innerHTML = error
   
        alert(error);
        }

    finally{
        alert("Obrigado pela visita")
    }

}

   function clickNumberButton(){

    number = document.getElementById("inputnumber").value

    try{
        if(number == ''){
        throw 'Informe um valor'
        }
        else if (number <= 5 || number >= 10 ){
            throw 'Informe um valor maior que 5 e menor que 10'
        }
    }
    catch(erro){

        document.getElementById("outputnumber").innerHTML = erro
         
    }

    finally{
        if(number != ''){
            document.getElementById('outputnumbervalor').innerHTML = 'O número escolhido foi o '+number
        }
        else{
            document.getElementById('outputnumbervalor').innerHTML = 'Nenhum valor foi inserido'
        }
    }
   console.log("Botao Number")
}
    
 /*
     1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10"

     2) Verifica se é nulo, se for, lança exception "Informe um valor" 

     3) Verifica se é maior que 5 e menor que 10, se não for, lança exception 
     "Informe um valor maior que 5 e menor que 10"

     4) Se o try falhar, lançar exception "Erro + erro javascript"
     N entendi muito bem oq fazer nesse ponto

     5) No finnaly informar "O número escolhido foi + " numero
*/