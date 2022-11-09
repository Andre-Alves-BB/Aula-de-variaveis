/* lembrando que quando for publicar no github usar todos os passos
criar repositorio no git
usar o comando git ini na pasta criada (usada somente na criação do projeto)
git remote add origin + o link da autenticação (somente quando for adicionar a primeira vez)
git add .
git status 
git commit -m "texto"
git push -u origin master (-u origin master somente quando for vincular a primeira vez depois so usar o push)*/


// const é uma variavel imutavel.

const cidade = "Uberaba, MG";

console.log(cidade);

// let ou var são variaveis mutaveis.

let populacaoDaCidade = 337.092;
console.log(populacaoDaCidade);

//string templates sempre é utilizado crase ao fazer a linha de codigo.

console.log(`minha cidade natal é ${cidade}, e contem ${populacaoDaCidade}`);
{
    {
        {
            /*chaves é usado para delimitar uma area a se escrever determinado codigo,
            então tudo que estiver descrito dentro do scopo sera de uso exclusivo daquela
            area, ou seja se caso criar uma variavel dentro do scopo e tentar chamar ela fora 
            isso não dara certo pois ela esta programada a ser utilizada somente dentro da area
            delimitada dentro das chaves, mais caso eu crie uma variavel fora das chaves e 
            chamar a mesma dentro das chaves isso ira funcionar normalmente, o que não posso fazer é utilizar 
            o que esta dentro das chaves depois de fechalas, então se criar variaveis ou outras coisas antes de 
            criar as chaves isso eu posso utlizar dentro das chaves*/

        }
    }



}