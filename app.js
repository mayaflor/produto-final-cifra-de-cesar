var word = prompt('Digite uma frase para ser criptografada')

function cipher(message, amount){
  if (/^[a-zA-Z]/.test(message)) {
    var intoArray = message.split("");
    var asciiObject = intoArray.map(l => l.charCodeAt());
    var asciiString = asciiObject.join();
    var asciiArray = asciiString.split(",");
    var intoCipher = [];
    for (i = 0; i < asciiArray.length; i++){
        if ((asciiArray[i] >= 65) && (asciiArray[i] <= 90)){
        var asciiCipher = (asciiArray[i] - 65 + amount) % 26 + 65;
        intoCipher.push(String.fromCharCode(asciiCipher));
      }
      else if ((asciiArray[i] >= 97) && (asciiArray[i] <= 122)){
        var asciiCipher = (asciiArray[i] - 97 + amount) % 26 + 97;
        intoCipher.push(String.fromCharCode(asciiCipher));
      }
    }    
    var stringCipher = intoCipher.join();
    var finalCipher = stringCipher.replace(/,/g, '');
    return document.getElementById("cipherMessage").innerHTML = finalCipher;
    } else {
    return alert('Por favor, digite somente letras e espaços')
    }
  }

function decipher(message, amount){ 
  if (/^[a-zA-Z]/.test(message)) {
    var intoArray = message.split("");
    var asciiObject = intoArray.map(l => l.charCodeAt());
    var asciiString = asciiObject.join();
    var asciiArray = asciiString.split(",");
    var intoDecipher = [];
    for (i = 0; i < asciiArray.length; i++){    
      if ((asciiArray[i] >= 65) && (asciiArray[i] <= 90)){
        var asciiDecipher = (asciiArray[i] - 90 - amount) % 26 + 90;
        intoDecipher.push(String.fromCharCode(asciiDecipher));
      }
      else if ((asciiArray[i] >= 97) && (asciiArray[i] <= 122)){
        var asciiDecipher = (asciiArray[i] - 122 - amount) % 26 + 122;
        intoDecipher.push(String.fromCharCode(asciiDecipher));      
      }
    }   
    var stringDecipher = intoDecipher.join();
    var finalDecipher = stringDecipher.replace(/,/g, '');
    return document.getElementById("decipherMessage").innerHTML =  finalDecipher;
    } else {
    return alert('Por favor, digite somente letras e espaços')
    }
  }

decipher(word,33);
cipher(word,33);