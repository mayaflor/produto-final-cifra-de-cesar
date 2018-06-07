var word = prompt('Digite uma frase para ser criptografada')

function cipher(message, amount){

	if (/^[a-zA-Z]/.test(message)) {
  
    var intoArray = message.split("");
    var AsciiObject = intoArray.map(l => l.charCodeAt());
    var AsciiString = AsciiObject.join();
    var AsciiArray = AsciiString.split(",");
    var intoCipher = []

    for (i = 0; i < AsciiArray.length; i++){
      
      if ((AsciiArray[i] >= 65) && (AsciiArray[i] <= 90)){
        var AsciiCipher = (AsciiArray[i] - 65 + amount) % 26 + 65;
        intoCipher.push(String.fromCharCode(AsciiCipher));
      }

      else if ((AsciiArray[i] >= 97) && (AsciiArray[i] <= 122)){
        var AsciiCipher = (AsciiArray[i] - 97 + amount) % 26 + 97;
        intoCipher.push(String.fromCharCode(AsciiCipher));
      }
    }
    
    var stringCipher = intoCipher.join();
    var finalCipher = stringCipher.replace(/,/g, '');

    return finalCipher

    } else {
    return alert('Por favor, digite somente letras e espaços')
    }
  }


cipher(word,33);