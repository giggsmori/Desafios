# language: pt
Funcionalidade: API Trello
  Como um testador de API
  Quero consultar uma action do Trello
  Para validar o status code e o conteúdo da resposta

  Cenário: Consultar action válida e validar nome da lista
    Quando envio um GET para a API do Trello com action válida
    Então o status code da resposta deve ser 200
    E o campo name da estrutura list deve ser "Professional"

  Cenário: Consultar action inválida
    Quando envio um GET para a API do Trello com action inválida
    Então o status code da resposta deve ser 404
