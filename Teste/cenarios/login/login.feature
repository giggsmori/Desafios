# language: pt
Funcionalidade: Login
  Como um usuário cadastrado
  Quero realizar login no site Automation Exercise
  Para acessar minha conta

  Cenário: Login válido com credenciais corretas
    Dado que estou na página de login
    Quando informo o email "teste2024@teste.com.br" e a senha "teste"
    E clico no botão de login
    Então devo estar logado com sucesso

  Cenário: Login inválido com credenciais incorretas
    Dado que não estou autenticado
    Quando informo o email "usuario.invalido@teste.com.br" e a senha "senhaerrada"
    E clico no botão de login
    Então devo ver mensagem de erro de login
