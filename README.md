- variável armazena a frase para ser criptografada e descriptografada
- função criptografa, um parâmetro com a mensagem e outro com o deslocamento
- if checa se a mensagem somente contém letras e espaço, else com alert pede que digite novamente
- variáveis transforma a frase em array, transforma as letras do array em ASCII, transforma de volta para string e por fim separa todas as letras em um array
- for percorre a array
- if checa se cada letra é maior ou igual a 65 e se são menores ou igual a 90, se sim guarda em uma variável a letra 33 posições para a direita, guardando a informação em uma string dentro de uma variável, transformando os números ASCII em letras novamente
- if faz o mesmo que o último, mas checa se cada letra é maior ou igual a 97 e se são menores ou igual a 122
- variável transforma a mensagem criptografada em string
- variável retira as vírgulas
- função retorna a frase criptografada no html
- função para descriptografar, faz a mesma coisa que a função que criptografa, mas os ifs checam se as letras são maiores ou iguais a 65 e 97, e menores ou iguais 90 e 122, e em vez de ir 33 posições para direita, vai para esquerda

![fluxograma](https://raw.githubusercontent.com/mayaflor/produto-final-cifra-de-cesar/master/fluxograma-produto-final-cifra-de-cesar.jpg)