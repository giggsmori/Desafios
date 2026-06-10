# language: pt
Funcionalidade: Busca
  Como um visitante do site
  Quero realizar buscas de produtos
  Para encontrar itens específicos

  Cenário: Buscar produto existente por nome
    Dado que estou na página de produtos
    Quando realizo uma busca por "Blue Top"
    Então devo ver produtos relacionados à busca "Blue Top"

  Cenário: Buscar produto inexistente
    Dado que estou na página de produtos
    Quando realizo uma busca por "ProdutoInexistenteXYZ"
    Então não devo ver produtos na listagem
