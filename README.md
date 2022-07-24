# Stock Trader XP
![Imagem da aplicação](https://i.postimg.cc/htjLGyCB/Screenshot-from-2022-07-24-14-48-59.png)

# 💻 Descrição geral do projeto
Esta aplicação foi desenvolvida individualmente para o  desafio técnnico XP Inc. A aplicação simula um ambiente real de negociação de ações em bolsa de valores, considerando as regras e caracteristicas do mercado brasileiro, com entrada por credenciais de acesso (Login, Senha, Token), escolha, acompanhamento e "boleta" para  operar ações, tipo de operação (compra, venda), lotes (padrão ou fracionário), possibilidade de alavancagem da posição, aluguel de ações e, inclusive,inversão da posição atual de compra/venda para venda/compra em uma única ordem (tomando aluguel quando for necessário), senha eletronica para envio de ordem, histórico de ordens, sendo possivel checar todas as ordens executadas com todas as caracteristicas pertinentes. Há controle de saldo com visualização de lançamentos futuros, garantidas requeridas (para operações com BTC) e possibilidade transacional, com depósito e retirada financeira, esta ultima, para contas cadastradas.

# 💡 Implementações extras

#### API (Database)
- Criação do back-end com as ações utilização para realização da aplicação.

#### ágina de Login
- Token de validação para acesso

#### Pagina de negociação
- Operações alavancadas
- Operações vendidas com "virada de mão" (inversão de posição)
- Aluguel de ações
- Negociação por lote (Padrão, Fracionário)
- Assinatura eletronica para envio de ordens

#### Pagina de consulta histórico de ordens
- Histórico de ordens executadas com caracteristicas fundamentais (preço médio, lado, status, data e hora)

#### Pagina controle financeiro
- Lançamentos futuros
- Garantias requeridas
- Seleção de conta bancária para retirada financeira

# 📋 Regras de negocio:

##### Login
- O E-mail deve ser informado em formato válido
- A senha deve ser maior ou igual à 6 caracteres 
- O Token deve ser igual à 6 caracteres

#### Negociações
- Não é possivel realizar vendas caso a ação não esteja em carteira
- Se a quantidade negociada for entre 1 e 99 quantidades, o lote será fracionário.
- Se a quantidade negociada for 100 ou maior, o lote será padrão.
- Se for informado quantidade maior que zero no campo de compra, o campo de venda é desabilitado.
- Se for informado quantidade maior que zero no campo de venda, o campo de compra é desabilitado.
- Para operações de compra, caso o valor da ordem seja maior do que o saldo disponivel em conta (Dafault 50) a ordem será alavancada.
- Para operações de venda, se a quantidade vendida for menor ou igual a quantidade em carteira, não haverá aluguel (BTC)
- Para operações de venda, se a quantidade vendida for maior do que a quantidade em carteira (operação virada de mão), haverá aluguel de ações para honrar a operação vendida.
- A Assinatura eletronica deve ser maior ou igual 6 e menor que 9 caracteres.
- A operação de compra ou venda so é permitida se a assinatura eletronica for informada corretamente.
- O Campo financeiro da ordem mostra o valor total da operação (valor unitário da ação multiplicado pela quantidade)

#### Histórico de ordens
- Quando operação de compra ou venda é realizada na tela de negociação, as caracteristicas fundamentais da ordem (lado, papel, lote, preço médio, quantidade, status e data/hora) são preenchidas com as informações da execução.
- Campo de filtro pelo código do papel

#### Saldo:
- Se houver uma compra com saldo maior do que o disponível em conta, a diferença do saldo será exibido em lançamentos futuros (negativo)
- Se houver uma compra com saldo igual ou menor do que o disponivel em conta, o valor da compra será debitado do saldo em conta.
- Se houver uma venda com quantidade menor ou igual ao disponivel em carteira, o valor da venda será acrescido no saldo em conta ou abatido do lançamentos futuros negativo.
- Se houver uma venda com quantidade maior do que o disponivel em carteira, haverá BTC, sendo acrescido o valor da venda no saldo em conta e o mesmo valor negativo no campo garantias

- Depósito
  - O saldo em contas, por default, é de 50.00
  - Depósito de saldo é acrescido ao saldo em conta caso este seja maior que zero
  - Deposito de saldo é diminui o valor negativo de um lançamento futuro, caso haja.
  - Se houver lançamentos futuros negativo e houver um depósito de saldo maior que o lançamento futuro, a diferença será disponibilizada em saldo em conta.

- Retirada:
  - Se o saldo em conta for maior que zero, o saldo pode se retirado, total ou parcialmente.
  - Se houver tentativa de retirada com saldo zero, será negado.


# 🛠 Tecnologias:

- Front-end:
  - React
  - Redux ToolkitHooks
  - JavaScript
  - Styled Components

- Back-end:
  - Node
  - Express
  - JavaScript
  - ORM (Sequelize)


# ⚡ Rodando localmente:

Clone o projeto:
```bash
git clone git@github.com:TabataSouto/stock-investing-app-xp.git
```

Entre no diretório do projeto:
```bash
cd stock-investing-app-xp
```

Instale as dependências:
```bash
npm install
```

Rode a aplicação:
```bash
npm start
```

Para rodar os testes realizados:
```bash
npm test
```

# ✅ Status do projeto
Concluído

# 💽 Deploy
O Deploy deste projeto foi realizado no Vercel https://stock-trader-mu.vercel.app/ 

# 📚 Aprendizados:
Fiz uma pesquisa de campo sobre as funciondalidades de uma página para negociar ações, considerando as regras básicas de negócio e caracteristicas do mercado brasileiro e utilizando conhecimentos pessoais.

Houve dificuldade para realização do deploy do back-end (API) de forma que fosse possível a correta chamada da rota criada na aplicação front end (Dersafio superado). As lógicas da lançamentos futuros e garantias foram complexas, o que gerou dificuldade no entendimento sobre decremento e incremento no saldo em conta, com suas implicações transacionais

# 👧 Colaborador
Tabata Caroline Souto
