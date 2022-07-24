# Stock Trader XP
![Imagem da aplicação](https://i.postimg.cc/htjLGyCB/Screenshot-from-2022-07-24-14-48-59.png)

# 💻 Descrição geral do projeto
Esta aplicação foi desenvolvida individualmente para o  desafio técnico XP Inc. A aplicação simula um ambiente real de negociação de ações em bolsa de valores, considerando as regras e caracteristicas do mercado brasileiro, com entrada por credenciais de acesso (Login, Senha, Token), escolha, acompanhamento e "boleta" para  operar ações, tipo de operação (compra ou venda), lotes (padrão ou fracionário), possibilidade de alavancagem da posição, aluguel de ações e, inclusive, inversão da posição atual de compra/venda para venda/compra em uma única ordem (tomando aluguel quando for necessário); senha eletronica para envio de ordem, histórico de ordens, com possibilidade de checagem e acompanhamento de todas as ordens executadas com suas caracteristicas pertinentes. Há controle de saldo com visualização de lançamentos futuros, garantias requeridas (para operações com BTC) e possibilidade transacional, com depósito e retirada financeira, esta ultima, para contas cadastradas.

# 💡 Implementações extras

#### API (Database)
- Criação do back-end com as ações utilizadas para desenvolvimento da aplicação.

#### Página de Login
- Token de validação de acesso.

#### Pagina de negociação
- Operações alavancadas.
- Operações vendidas com "virada de mão" (inversão de posição).
- Aluguel de ações.
- Negociação por lote (Padrão, Fracionário).
- Assinatura eletrônica para envio de ordens.

#### Pagina de consulta histórico de ordens
- Histórico de ordens executadas com caracteristicas fundamentais (preço médio, lado, status, data e hora).

#### Pagina controle financeiro
- Lançamentos futuros.
- Garantias requeridas.
- Seleção de conta bancária para retirada financeira.

# 📋 Regras de negócio:

##### Login
- O E-mail deve ser informado em formato válido.
- A Senha deve ser maior ou igual à 6 caracteres.
- O Token deve ser igual à 6 caracteres.

#### Negociações
- Não é possivel realizar vendas caso a ação não esteja em carteira.
- Se a quantidade negociada for entre 1 e 99 quantidades, o lote será fracionário.
- Se a quantidade negociada for 100 quantidades ou mais, o lote será padrão.
- Se for informado quantidade maior que zero no campo de compra, o campo de venda é desabilitado.
- Se for informado quantidade maior que zero no campo de venda, o campo de compra é desabilitado.
- Para operações de compra, caso o valor da ordem seja maior do que o saldo disponivel em conta (por default a aplicação abre com saldo de 50) a ordem será alavancada.
- Para operações de venda, se a quantidade vendida for menor ou igual a quantidade em carteira, não haverá aluguel (BTC).
- Para operações de venda, se a quantidade vendida for maior do que a quantidade em carteira (operação virada de mão), haverá aluguel de ações para honrar a operação vendida.
- A Assinatura eletrônica deve ser maior ou igual a 6 e menor que 9 caracteres.
- A operação de compra ou venda só é permitida se a assinatura eletrônica for informada corretamente.
- O Campo financeiro da ordem mostra o valor total da operação (valor unitário da ação multiplicado pela quantidade da ordem).

#### Histórico de ordens
- Quando operação de compra ou venda é realizada na tela de negociação, as caracteristicas fundamentais da ordem (lado, papel, lote, preço médio, quantidade, status e data/hora) são preenchidas com as informações da execução.
- Campo de filtro pelo código do papel.

#### Saldo:
- Se houver uma compra com saldo maior do que o disponível em conta, a diferença do saldo será exibido em lançamentos futuros (negativo).
- Se houver uma compra com saldo igual ou menor do que o disponivel em conta, o valor da compra será debitado do saldo em conta.
- Se houver uma venda com quantidade menor ou igual à quantidade daquele papel disponivel em carteira, o valor da venda será acrescido no saldo em conta ou abatido do lançamentos futuros.
- Se houver uma venda com quantidade maior do que o disponivel em carteira, haverá BTC (aluguel de ações), sendo acrescido o valor da venda no saldo em conta e o mesmo valor negativo no campo garantias.

- Depósito
  - O saldo em conta, por default, é de 50.00.
  - O saldo é acrescido ao saldo em conta, caso este seja maior ou igual a zero e não haja lançamentos futuros.
  - O saldo diminui o valor negativo de um lançamento futuro, caso haja.
  - Se houver lançamentos futuros negativos e houver um saldo maior que o lançamento futuro, a diferença será disponibilizada em saldo em conta.

- Retirada:
  - Se o saldo em conta for maior que zero, o saldo pode se retirado, total ou parcialmente.
  - Se houver tentativa de retirada com saldo zero, será negado.

# 🛠 Tecnologias:

- Front-end:
  - React.
  - Redux Toolkit.
  - Hooks.
  - JavaScript.
  - Styled Components.

- Back-end:
  - Node.
  - Express.
  - JavaScript.
  - ORM (Sequelize).

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
O Deploy deste projeto foi realizado no [Vercel](https://stock-trader-mu.vercel.app/).

# 📚 Aprendizados:
Realizei pesquisas sobre as funciondalidades de uma página para negociação de ações, considerando as regras básicas de negócio e caracteristicas do mercado brasileiro, além de utilizar conhecimentos pessoais.

Houve dificuldade para realização do deploy do back-end (API) de forma que fosse possível a chamada da rota criada na aplicação front end (Desafio superado). As lógicas da lançamentos futuros e garantias foram complexas, o que gerou dificuldade no entendimento sobre decremento e incremento no saldo em conta, com suas implicações transacionais e valor de posição.

# 👧 Colaborador
Tabata Caroline Souto
