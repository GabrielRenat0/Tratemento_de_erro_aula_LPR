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
            throw 'Informe um valor';
        }
        
    }
    catch(error){
        console.log(error);
        alert(error);
        //document.getElementById('output').textContent="Arquivo não localizado"
        }

    finally{
        alert("Obrigado pela visita")
    }

}

   function clickNumberButton(){

    number = document.getElementById("inputnumber").value
    try{
        if(number == '')
        throw 'Informe um valor;'
    }

    catch(erro){
document.getElementById("outputnumber").innerHTML = erro;
    }

   console.log("Botao Number")
}
    
    




   /* var fr=new FileReader();
    
    try{
        
        fr.readAsText(arquivo.files[0]);
        fr.onload=function() {
            info = fr.result;
            document.getElementById('output').textContent=fr.result;
        }

        var info = document.getElementById('output').textContent;
        if(info == null){
            throw 'Informe um valor';
        }
        
    }
    catch(error){
        console.log(error);
        alert(error);
        //document.getElementById('output').textContent="Arquivo não localizado"
        }

    finally{
        alert("Obrigado pela visita")
    }

}

/*fr.readAsText(arquivo.files[0]);

    console.log(arquivo.files)
    
    fr.onload=function(){
        document.getElementById('output').textContent=fr.result;
    }
    
    
}
*/