const form = document.getElementById('form-aposta'); // Pegar o formulario pelo ID
	

	form.addEventListener('submit', function(e){ //Adicionar esse listener para ouvir o submit
	    e.preventDefault();
	

	 const numeroA = Number(document.getElementById('apostaA').value); //Pegar o valor do input A
	 const numeroB = Number(document.getElementById('apostaB').value);//Pegar o valor do input  B
     


	 if(numeroA > numeroB){        
	        alert('Invalido! aposta B deve ser maior que a aposta A')
 
            
	 }else {
        alert('Aposta efetuada com sucesso "Boa Sorte"')
        
        apostaA.value = '';
        apostaB.value = ''; 

    	 }
	})


	