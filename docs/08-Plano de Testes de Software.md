# Plano de Testes de Software 

Os requisitos para realização dos testes de software são: 
* Site publicado na Internet 
* Navegador da Internet - Chrome, Firefox ou Edge 
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


| Caso de Teste | CT-01 - Visualizar principais criptomoedas do mercado 
| Requisitos Associados | RF-01 - O site deve apresentar na página principal com barra de navegação e as 3 criptomoedas mais valiosas do mercado. 
| Objetivo do Teste | Verificar se a aba principal está informando a valorização das 3 criptomoedas mais valiosas do mercado. 
| Passos | 1) Acessar o Navegador 
           2) Informar o endereço do Site 
           3) Visualizar a página principal 
| Critérios de Êxito | * Deve haver uma requisição AJAX no painel NETWORK das ferramentas do Desenvolvedor (recurso do Navegador). 
                       * As criptomoedas devem ser exibidas corretamente no site, sendo necessárias pelo menos 3 criptomoedas serem apresentadas 
                       * As notícias devem trazer imagens visíveis associadas a criptomoeda informada 


| Caso de Teste | CT-02 – Login de usuário 
| Requisitos Associados | RF-02 - O site deve permitir que o usuário tenha acesso a tela de login e cadastro, para acessar carteira pessoal e personalizações próprias. 
| Objetivo do Teste | Verificar ser o cliente conseguira fazer o login ou cadastro corretamente. 
| Passos | 1) Acessar o Navegador 
           2) Informar o endereço do Site 
           3) Visualizar a página principal 
           4) Clicar em login 
           5) Preencher informações necessárias 
           6) Realizar cadastro ou login 
| Critérios de Êxito | A página deve apresentar a mensagem de que o cliente conseguir fazer cadastro ou login após preenchimento adequado de informações solicitadas.



| Caso de Teste | CT-03 – Realizar compra e venda de criptomoedas 
| Requisitos Associados |  RF-03 - O site deve permitir ao usuário realizar operações com criptomoedas (venda e compra) e favorizar moedas com maior interesse. 
| Objetivo do Teste | Verificar se o cliente conseguira realizar compra e venda de criptomoedas através do site. 
| Passos | 1) Acessar o Navegador 
           2) Informar o endereço do Site 
           3) Visualizar a página principal 
           4) Clicar na aba carteira 
           5) Realizar login 
           6) Acessar área de compra e venda de moedas 
           7) Comprar ou vender criptomoeda 
           8) Visualizar valor em carteira pessoal 
| Critérios de Êxito | O site deve permitir realizar o login e acessar carteira pessoal para fazer transações de compra ou venda de criptomoedas, após as transações os valores deveram ser creditados ou debitados da carteira pessoal do cliente.





| Caso de Teste | CT-04 - Visualizar dicas de investimentos 
| Requisitos Associados | RF-04- O site deve permitir ao usuário visualizar dicas de investimento através da aba universidade com links de fontes confiáveis.    
| Objetivo do Teste | Verificar se o site está permitindo que o cliente visualize as dicas de investimentos. 
| Passos | 1) Acessar o Navegador 
           2) Informar o endereço do site 
           3) Acessar a aba de universidade do site 
           4) Clicar no link disponível 
| Critérios de Êxito | Quando o cliente clicar no link disponibilizado página deve direcionar para o site de dicas de investimentos 




| Caso de Teste| CT-05 - Visualizar informações do mantenedor  
| Requisitos Associados| RF-05- O site deve permitir visualizar as informações de contatos do mantenedor do site. 
| Objetivo do Teste | Verificar as informações de contatos do mantenedor. 
| Passos| 1) Acessar o Navegador 
          2) Informar o endereço do site 
          3) Acessar a aba quem somos  
          4) Clicar para visualizar quem são os mantenedores 
| Critérios de Êxito | Quando o cliente se dirigir para o endereço do site, deve ser disponibilizado quem são os mantenedores. 




| Caso de Teste| CT-06 - Visualizar o modo do site  
| Requisitos Associados | RF-06- O site deve permitir que o usuário mude para modo noturno. 
| Objetivo do Teste | Verificar se o ícone que fica do lado direito do site está funcionando. 
| Passos | 1) Acessar o Navegador 
           2) Informar o endereço do Site 
           3) Acessar o lado direito da tela 
           4) Clicar no ícone 
| Critérios de Êxito | Quando o cliente se dirigir para o endereço do site, deve ser disponibilizado um ícone que muda para modo noturno. 













