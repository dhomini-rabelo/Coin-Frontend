<h1>Coin-Frontend</h1>
<p>
    Este projeto é para controle financeiro, aqui contém apenas o front-end. Acesse o código do backend em: <a href="https://github.com/dhomini-rabelo/Coin-Backend">https://github.com/dhomini-rabelo/Coin-Backend</a>.
</p>

<h2 id="tools">🛠️ Principais ferramentas</h2>

<ul>
<li>Vite ts</li>
<li>Tailwind</li>
<li>Styled-components</li>
<li>Phosphor-react</li>
<li>date-fns</li>
<li>react-router-dom</li>
<li>react-hook-form</li>
<li>react-query</li>
<li>hookform/error-message</li>
<li>zod</li>
<li>date-fns</li>
<li>axios</li>
<li>headlessui</li>
<li>zod</li>
</ul>

<br>
<h2 id="project">🎥 Projeto</h2>

<ul>

<li>
<h3>Cadastro de usuários</h3>
<p>A validação de formulário é feita com zod neste projeto</p>
<br>
<kbd><img src="./readme/register.gif"></kbd>
</li>

<br>
<li>
<h3>Login</h3>
<p>
A autenticação é feita usando tokens JWT, esses tokens são salvos no localStorage. 
A classe que faz o controle do armazenamento desses tokens esta em "project\src\code\controllers\Auth\index.ts".
</p>
<br>
<kbd><img src="./readme/login.gif"></kbd>
</li>

<br>
<li>
<h3>Alteração de dados do usuário</h3>
<p>
Criei um hook personalizado para mostrar mensagens ao usuário, este hook esta em "project\src\code\hooks\useFeedback\index.tsx".
</p>
<br>
<kbd><img src="./readme/change_user.gif"></kbd>
</li>

<br>
<li>
<h3>Criando e visualizando contas</h3>
<br>
<kbd><img src="./readme/create_bills.gif"></kbd>
</li>

<br>
<li>
<h3>Filtrando contas</h3>
<br>
<kbd><img src="./readme/filter_bills.gif"></kbd>
</li>

<br>
<li>
<h3>Visualização de dados financeiros</h3>
<p>
Mostra as últimas 10 contas.
</p>
<br>
<kbd><img src="./readme/view_data.gif"></kbd>
</li>

<br>
<li>
<h3>Listagem de dados com react-query</h3>
<p>
A listagem de compras é feita usando react-query, com cache de 1 minuto (usando recarregamento após evento de foco),
como pode ser observado o cache permanece mesmo com as rerenderizações. 
Quando uma nova conta é adicionada o cache é removido.
</p>
<br>
<kbd><img src="./readme/list_bills.gif"></kbd>
</li>

<br>
<li>
<h3>Autenticação - tokens no local Storage</h3>
<p>
Os tokens são salvos no localStorage, isso permite que após o refresh da página o usuário continue autenticado. Se esse refresh acontecer depois do token
ter sido expirado o usuário é redirecionado para a página de login.
</p>
<br>
<kbd><img src="./readme/auth_tokens.gif"></kbd>
</li>

<br>
<li>
<h3>Telas no mobile</h3>
<br>
<kbd><img src="./readme/mobile.gif"></kbd>
</li>



</ul>