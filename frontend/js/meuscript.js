$(function() { // quando o documento estiver pronto/carregado
    
    $.ajax({
        url: 'http://localhost:5000/listar_clientes',
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar, // chama a função listar para processar o resultado
        error: function() {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    function listar (clientes) {
        // percorrer a lista de pessoas retornadas; 
        for (var i in clientes) { //i vale a posição no vetor
            lin = '<tr>' + // elabora linha com os dados da pessoa
              '<td>' + pessoas[i].username + '</td>' + 
              '<td>' + pessoas[i].password + '</td>' + 
              '<td>' + pessoas[i].name + '</td>' + 
              '<td>' + pessoas[i].email + '</td>' + 
              '<td>' + pessoas[i].cpf + '</td>' + 
              '<td>' + pessoas[i].rg + '</td>' + 
              '<td>' + pessoas[i].celular + '</td>' + 
              '<td>' + pessoas[i].endereco + '</td>' +           

              '</tr>';
            // adiciona a linha no corpo da tabela
            $('#corpoTabelaClientes').append(lin);
        }
    }

});