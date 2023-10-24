const form = document.getElementById('formulario');
let validarForm = false;

function validarNumero(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = parseFloat(document.getElementById('input-campo-a').value);
    let campoB = parseFloat(document.getElementById('input-campo-b').value);

    const msgSucesso = `<b>Valor enviado com sucesso! <b>O valor do campo B é maior que do campo A</b></b>`
    const caixaMsgSucesso = document.querySelector('.smg-sucesso');

    validarForm = validarNumero(campoA, campoB);
    if(validarForm){
        document.querySelector('.valorError').style.display = 'none';
        caixaMsgSucesso.innerHTML = msgSucesso;
        caixaMsgSucesso.style.display = "block";

        campoA.value = ' ';
        campoB.value = ' ';

    }
    else{
        document.querySelector('.valorError').style.display = 'block';
        caixaMsgSucesso.style.display = 'none';
    }
})


