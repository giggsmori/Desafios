# language: pt
Funcionalidade: Validar produto no carrinho
  Como um visitante do site
  Quero validar os produtos no carrinho na tela de pagamento
  Para confirmar minha compra

  Cenário: Validar produto adicionado na tela de pagamento
    Dado que estou logado com "teste2024@teste.com.br" e senha "teste"
    E que limpo o carrinho
    E que estou na página de produtos
    E adiciono o produto "Blue Top" ao carrinho
    Quando acesso o carrinho e prossigo para o checkout
    Então o produto "Blue Top" deve estar listado na tela de pagamento

  Cenário: Produto não adicionado não deve aparecer no checkout
    Dado que estou logado com "teste2024@teste.com.br" e senha "teste"
    E que limpo o carrinho
    E que estou na página de produtos
    E adiciono o produto "Men Tshirt" ao carrinho
    Quando acesso o carrinho e prossigo para o checkout
    Então o produto "Blue Top" não deve estar listado na tela de pagamento
