
Processo

O processo é composto de um teste de código (descrito abaixo); uma entrevista para discutirmos sobre a solução que você desenvolveu e também para te conhecer um pouco melhor; e, por fim, uma última entrevista com nosso CTO.



Teste

Nosso teste consiste em desenvolver uma página que simula a listagem de produtos em um ecommerce. Essa página deve conter algumas funcionalidades, como busca, paginação, e limite de produtos por página.



A página deve interagir com o catálogo de produtos via um backend que exponha uma API RESTful, que por sua vez busca os dados de um banco de dados (relacional ou não). Utilize a imagem em anexo como referência de como implementar o layout da página.



Nós temos como stack as seguintes tecnologias: Node.js, Typescript e React. Você pode seguir esse stack, mas, se você se sentir mais confortável com outras tecnologias, tudo bem em utilizá-las, vamos avaliar a qualidade do código escrito.



Seguem algumas outras orientações:

- Observe que o título da página, no topo da listagem, é o termo da busca. Quando não há texto de busca, o título deve ser "Lista de produtos", espelhe título com termo de busca.

- Para exemplificar a busca e a navegação, popular o banco com itens com descrições únicas para que a busca funcione e seja possível utilizar a paginação corretamente (seed).

- O projeto deve estar em algum repositório público.

- O projeto deve conter um arquivo de README, com orientações de instalação e execução local

- Essa aplicação deve estar disponível para ser acessada via web. Você pode utilizar qualquer serviço para hospedá-la, sugerimos AWS, Heroku, Firebase ou Netlify (todos possuem free tiers)

- Ao finalizar, por gentileza, nos envie os links para o repositório e onde você hospedou o projeto



Vale ressaltar que iremos avaliar o seu código pela legibilidade, organização, testabilidade, preocupação com performance (lembrando que backend e frontend têm abordagens distintas para essa questão) e possibilidade de automação do seu projeto.



# Para executar os arquivos do seeder e da migration
- primeiro executar:  `php artisan migrate`

Neste ponto, nossa tabela ainda está vazia. Precisamos executar o comando db:seed para propagar o banco de dados com nossas amostras de locais:
`php artisan db:seed`

Para buscar na Api (insomia/postman) alguma elemento em especifico utilizar a requisição no localhost:
`http://127.0.0.1:8000/api/index?term=kt`
Para listar todos os itens na API (insomia/postman) utilizar a requisição no localhost:
`http://127.0.0.1:8000/api/index`
Para 
`http://127.0.0.1:8000/api/index?page=3`

para instalar a fontawesome
` npm install --save @fortawesome/free-solid-svg-icons`

npm install react-router-dom