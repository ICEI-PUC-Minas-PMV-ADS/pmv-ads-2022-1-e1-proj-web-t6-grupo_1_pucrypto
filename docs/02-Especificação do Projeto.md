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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
