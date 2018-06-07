var word = prompt('Digite uma frase para ser criptografada')

function cipher(message, amount){
  if (/^[a-zA-Z]/.test(message)) {
    var intoArray = message.split("");
    var AsciiObject = intoArray.map(l => l.charCodeAt());
    var AsciiString = AsciiObject.join();
    var AsciiArray = AsciiString.split(",");
    var intoCipher = [];
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
    return document.getElementById("cipherMessage").innerHTML = finalCipher;
    } else {
    return alert('Por favor, digite somente letras e espaços')
    }
  }

function decipher(message, amount){ 
  if (/^[a-zA-Z]/.test(message)) {
    var intoArray = message.split("");
    var AsciiObject = intoArray.map(l => l.charCodeAt());
    var AsciiString = AsciiObject.join();
    var AsciiArray = AsciiString.split(",");
    var intoDecipher = [];
    for (i = 0; i < AsciiArray.length; i++){    
      if ((AsciiArray[i] >= 65) && (AsciiArray[i] <= 90)){
        var AsciiDecipher = (AsciiArray[i] - 90 - amount) % 26 + 90;
        intoDecipher.push(String.fromCharCode(AsciiDecipher));
      }
      else if ((AsciiArray[i] >= 97) && (AsciiArray[i] <= 122)){
        var AsciiDecipher = (AsciiArray[i] - 122 - amount) % 26 + 122;
        intoDecipher.push(String.fromCharCode(AsciiDecipher));      
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