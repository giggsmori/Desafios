# language: pt
Funcionalidade: Validar produto no carrinho
  Como um usuário autenticado
  Quero validar os produtos no carrinho e finalizar a compra
  Para confirmar minha compra

  Contexto:
    Dado que estou logado com "teste2024@teste.com.br" e senha "teste"

  Cenário: Validar produto e finalizar compra com sucesso
    E que limpo o carrinho
    E que estou na página de produtos
    Quando adiciono o produto "Blue Top" ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso
    E o produto "Blue Top" deve estar listado no carrinho
    Quando prossigo para o checkout
    Então o produto "Blue Top" deve estar listado na tela de pagamento
    Quando concluo a compra
    Então a compra deve ser finalizada com sucesso

  Cenário: Produto não adicionado não deve aparecer no checkout
    E que limpo o carrinho
    E que estou na página de produtos
    Quando adiciono o produto "Men Tshirt" ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso
    E o produto "Men Tshirt" deve estar listado no carrinho
    Quando prossigo para o checkout
    Então o produto "Men Tshirt" deve estar listado na tela de pagamento
    E o produto "Blue Top" não deve estar listado na tela de pagamento
