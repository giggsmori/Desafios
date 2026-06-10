# language: pt
Funcionalidade: Adicionar ao carrinho
  Como um visitante do site
  Quero adicionar produtos ao carrinho
  Para comprá-los posteriormente

  Cenário: Adicionar produto ao carrinho com sucesso
    Dado que estou na página de produtos
    Quando adiciono o produto "Blue Top" ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso

  Cenário: Carrinho vazio não deve conter produtos
    Dado que estou na página de produtos
    Quando acesso o carrinho vazio
    Então o carrinho não deve conter produtos
