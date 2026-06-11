# language: pt
Funcionalidade: Adicionar ao carrinho
  Como um usuário autenticado
  Quero adicionar produtos ao carrinho
  Para comprá-los posteriormente

  Contexto:
    Dado que estou logado com "teste2024@teste.com.br" e senha "teste"

  Cenário: Adicionar produto ao carrinho com sucesso
    E que estou na página de produtos
    Quando adiciono o produto "Blue Top" ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso
    E o produto "Blue Top" deve estar listado no carrinho

  Cenário: Carrinho vazio não deve conter produtos
    E que limpo o carrinho
    Então o carrinho não deve conter produtos
