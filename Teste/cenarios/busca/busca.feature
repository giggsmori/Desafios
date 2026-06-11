# language: pt
Funcionalidade: Busca
  Como um usuário autenticado
  Quero realizar buscas de produtos
  Para encontrar itens específicos

  Contexto:
    Dado que estou logado com "teste2024@teste.com.br" e senha "teste"

  Cenário: Buscar produto existente por nome
    E que estou na página de produtos
    Quando realizo uma busca por "Blue Top"
    Então devo ver produtos relacionados à busca "Blue Top"

  Cenário: Buscar produto inexistente
    E que estou na página de produtos
    Quando realizo uma busca por "ProdutoInexistenteXYZ"
    Então não devo ver produtos na listagem
