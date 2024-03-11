const { validarCadastro, enviarDuvida, irParaSecao } = require('./funcoes');

test('Cadastro de cliente validado', () => {
    const test_dadosCadastro = {
        nome: 'José Souza',
        cpf: '123.456.789-00',
        email: 'jose@gmail.com',
        telefone: '(00) 0 0000-0000',
        descricao_veiculo: 'Sedan Toyota Corolla'
    };
    expect(validarCadastro(test_dadosCadastro)).toBe(true);
});


test('Enviar Dúvidas validado', () => {
    const test_duvida = {
        email: 'jose@gmail.com',
        assunto: 'Dúvida sobre como o sistema funciona',
    };
    expect(enviarDuvida(test_duvida)).toBe(true);
});


test('Navegação pelo Menu', () => {
  const linkNovoCadastro = document.querySelector('a[href="#formulario"]');
  const linkEnviarDuvidas = document.querySelector('a[href="#duvidas"]');
  const linkSobre = document.querySelector('a[href="#sobre"]');

  expect(rolarParaSecao(linkNovoCadastro)).toBe(true);
  expect(rolarParaSecao(linkEnviarDuvidas)).toBe(true);
  expect(rolarParaSecao(linkSobre)).toBe(true);
});


test('Exibindo o sobre a empresa', ()=> {
    const linkSobre = document.querySelector('a[href="#sobre"]');
    expect(irParaSecao(linkSobre)).toBe(true);
});

