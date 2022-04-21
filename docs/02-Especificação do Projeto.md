# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas

Amanda Alves tem 30 anos, é advogada e sócia de um pequeno escritório que atua em processos de investimento blockchain. Pensa em conseguir uma renda passiva para alcançar uma estabilidade financeira invetindo em empresas com clareza e responsabilidade. Já perdeu mais de R$10.000,00 em pirâmides financeiras e agora está focando em estudar investimentos em criptomoedas e gestão pessoal.

Carlos Gomes tem 43 anos, é Engenheiro de Produção e investidor na bolsa de valores e no mercado de criptomoedas. Orienta pessoas para conseguirem estabilidade financeira. Sua forma de investir é clara: sempre em empresas com potencial para aportes financeiros confiáveis. Há alguns anos, sua empresa de vendas automobilísticas foi à falência devido a pagamentos de multas por sonegação, e por cauda disso, acabou perdendo a casa para o banco. Seus maiores hobbies são: Desenhos 3D, palestrar sobre gestão financeira e fazer viagens a trabalho.

Daniel Morais tem 18 anos, é estudante e deseja ter uma estabilidade financeira aos 25 ano. Para isso, ele quer criar uma startup aos 25 anos. Sua maior motivação é dar uma vida melhor para os pais. Mas, como um grande obstáculo, Daniel não tem capital e ainda não possuí idade e conhecimento suficiente para tais empreendimentos. Seus maiores hobbies são: Andar de Skate, jogar videp-games e ler livros.

Sheldon Dias tem 25 anos, é Engenheiro de Software e Gerente de projetos de uma multinacional. Sheldon deseja ser autônomo, inovando o mundo com novas tecnologias e, por fim, se tornar um milionário com tais empreendimentos. Perdeu um software por decisão judicial e suas maiores frustrações é não poder ter filhos e não ter temopo de gerir seu capital. Seus Hobbies são: estudar investimentos em criptomoedas, ler livros de ficção ciêntífica e colecionar mangás.

Horácio Pedroza tem 50 anos, é aposentado e dono de uma loja de artesanato. Sempre gostou de aprender coisas novas, fazendo com que ele tenha um vasto conhecimento para deixar um património para seus filhos. Com o falecimento da esposa, Horácio entrou em uma profunda depressão, fazendo com que se afastasse de sua família. Ele também lamenta ter uma renda passiva pequena e não ter tido tempo de aprender a ler e escrever quando era mais novo. Seus maiores hobbies são: descansar em um rede, ler jornais e caminhar.


## Histórias de Usuários

A partir da compreensão do dia-a-dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. :

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Amanda Alves | Notícias e orientações para possíveis investimento | Criar uma renda passiva e ter uma estabilidade financeira |
|Carlos Gomes | Ter um site de confiança para indicar e atrair clientes através das minhas orientações | Gerar dinheiro através de consultorias e orientações de investimentos |
|Daniel Morais | Criar uma carteira virtual onde possa alocar um pequeno capital e ter retornos substanciais | Gerar um grande retorno financeiro através do mercado de criptomoedas e aplicar na fundação de uma empresa |
|Sheldon Dias | Ter um local de confiança onde poderá alocar grande capital e geri-lo com facilidade | Gerar grandes retornos com facilidade e clareza no mercado de criptomoedas |
|Horácio Pedroza | Aplicar fundo pensionário, onde irá gerir uma renda passiva satisfatória | Conseguir deixar uma quantia suficiente há amparar seus familiares |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possiveis interações dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar, na tela da carteira, as criptomoedas que o usuário mais investe | ALTA | 
|RF-002| O site deve apresentar, na página principal, as criptomoedas que estão mais em alta no mercado | MÉDIA |
|RF-003 | O site deve permitir ao usuário visualizar quanto ele tem investido em criptos e a conversão delas em Real | ALTA |
|RF-004 | O site deve oferecer uma tela chamada Universidade que permita ao usuário visualizar algumas dicas e artigos de investimento em criptomoedas | MÉDIA |
|RF-005 | O site deve permitir ao usuário realizar operações com criptomoedas (venda e compra) | ALTA |
|RF-006 | O site deve permitir visualizar as informações de contados dos mantenedores do site | MÉDIA |
|RF-007 | O site deve permitir que o usuário mude para modo noturno | BAIXA |
|RF-008 | O site deve permitir salvar criptomoedas favoritas | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente seguro, por se tratar de dados e das finanças dos usuários; | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 14/07/2022 |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end  |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
