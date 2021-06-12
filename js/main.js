(function(){
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){





    //    Campos Datos Usuario
        var  nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

 // Campos Pase
        var pase_dia = document.getElementById('pase_dia');
        var pase_dos_dias = document.getElementById('pase_dos_dias');
        var pase_completo = document.getElementById('pase_completo');

// Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var resultado = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');


// Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

// ===========================================================================================================
       if(document.getElementById('calcular')){

       

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dos_dias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);



        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);

        email.addEventListener('blur', validarMail);


// Validar Campos
function validarCampos(){
    if(this.value == ''){
        errorDiv.style.display= 'block';
        errorDiv.innerHTML = "Este campo es obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
    }else{
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccc';
    }
}

// ValidarMail
function validarMail(){
    if(this.value.indexOf("@")> -1){
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccc';
    }else{
        errorDiv.style.display= 'block';
        errorDiv.innerHTML = "El Mail necesita un @";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
    }
}




function calcularMontos(event){
    event.preventDefault();

if(regalo.value === ''){
    alert("Debes elegir un regalo");
    regalo.focus();

}else{
   var boletosDias = parseInt(pase_dia.value, 10) ||0,
        boletos2Dias = parseInt(pase_dos_dias.value, 10) ||0 ,
        boletoCompleto = parseInt(pase_completo.value, 10) ||0,
        cantidadCamisas = parseInt(camisas.value, 10) ||0,
        cantEtiquetas = parseInt(etiquetas.value, 10) ||0; 


        var totalPagar = (boletosDias * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantidadCamisas * 10) *.93) + (cantEtiquetas * 2);

        var listadoProductos = [];

        if(boletosDias >=1){
            listadoProductos.push(boletosDias + ' Pase por día');
        }
        if(boletos2Dias >=1){
            listadoProductos.push(boletos2Dias + ' Pase por 2 días');
        }
        if(boletoCompleto >=1){
            listadoProductos.push(boletoCompleto + ' Pase completos');
        }
        if(cantidadCamisas >=1){
            listadoProductos.push(cantidadCamisas + ' Camisas');
        }
        if(cantEtiquetas >=1){
            listadoProductos.push(cantEtiquetas + ' Etiquetas');
        }
        
        lista_productos.style.display="block";
        lista_productos.innerHTML = '';
        for(var i =0; i < listadoProductos.length; i++){
            lista_productos.innerHTML += listadoProductos[i] + '<br/>'
        }   
    suma.innerHTML = '$' + totalPagar.toFixed(2);
    }
}
// ======================================================================================

function mostrarDias(){
    var boletosDias = parseInt(pase_dia.value, 10) ||0,
    boletos2Dias = parseInt(pase_dos_dias.value, 10) ||0,
    boletoCompleto = parseInt(pase_completo.value, 10) ||0;

    var diasElegidos = [];

    if(boletosDias >0){
        diasElegidos.push('viernes');
        console.log(diasElegidos);
    }
    if(boletos2Dias >0){
        diasElegidos.push('viernes', 'sabado');
        console.log(diasElegidos);
    }
    if(boletoCompleto >0){
        diasElegidos.push('viernes', 'sabado', 'domingo')
        console.log(diasElegidos);
    }
    for(var i=0; i < diasElegidos.length; i++){
        document.getElementById(diasElegidos[i]).style.display = 'block';
    }
    
}

       }

    }); //DOM CONTENT LOADED

})();

   





