# Heart Design
### Um projeto feito com CSS e JavaScript, contendo nele animação e feita com CSS e um player de música personalizado, para que você possa mostrar para aquela pessoa que você gosta.

> ## Guia de instalação
> * Faça o download do Xampp;
> * Faça um clone deste projeto na pasta `C:/xampp/htdocs/`;
> * Para acessar o site, acesse a URL `localhost/Heart_Design`.

## Realizando modificações no projeto:
> ### Como adicionar novas músicas?
> * Vá até a pasta `public/js`, e abra o arquivo `utils.js`;
> * Neste arquivo estou exportando um array para o arquivo `player.js`, neste array é aonde que ficará o title (Nome da música), artist (Artista/Banda que está tocando está música) e o arquivo de música (este arquivo deve estar na pasta `public/audio`, o mesmo nome do arquivo tem que ser referido na array.
> #### Obs: a cada final de inserção de dados no array se deve fechar chaves e adicionar a vírgula (lembrando que na última camada de dados não se deve colocar a vírgula).

> ### Como alterar os textos?
> * No `index.html` vá atá a `<DIV>` com `class="card-content"` e altere o primeiro texto que você quer que apareça;
> * Logo após, acesse a pasta `public/js` e, abra o arquivo `index.js`;
> * Neste arquivo temos duas estruturas de array uma denominei de `title` e a outra de `content`, modifique os dados e coloque quantos textos que você quiser para que apareça após o evento de clique do `<a>`.
