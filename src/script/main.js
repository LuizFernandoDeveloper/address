/*document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-search-cep').addEventListener('click', function(){
        //Ajax -- Asynchronous JavaScript and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById("cep").value;
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        xhttp.open('GET', endPoint);
        xhttp.send();
    });
});


$(document).ready(function(){
    $('#cep').mask('00000-000')
    $('#btn-search-cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endPoint).done(function(response){
            const logradouro = response.logradouro;
            const bairro = response.bairro;
            const cidade = response.localidade;
            const estado  = response.uf;
            const address = `${logradouro}, ${bairro}-${cidade}-${estado} `
            
            setTimeout(function(){
                $('#address').val(address);
                $(botao).find('span').addClass('d-none');
                $(botao).find('i').removeClass('d-none');
            }, 600);
        })
    })
})
*/


$(document).ready(function(){
    $('#cep').mask('00000-000');

    $('#btn-search-cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json/response`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        window.fetch(endPoint)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado  = json.uf;
            const address = `${logradouro}, ${bairro}-${cidade}-${estado}`;

            setTimeout(function(){
                $('#address').val(address);
                $(botao).find('span').addClass('d-none');
                $(botao).find('i').removeClass('d-none');
            }, 600);
        });
    });
})

