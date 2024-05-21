<!--
author:   k. kaiser

email:    fdm@uni-wuppertal.de

version:  0.0.1

@language: de

link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css

script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js

import: https://raw.githubusercontent.com/liaTemplates/processingjs/master/README.md

tags:     Forschungsdaten, Datenmanagement, Studium, Bachelor, Digital Literacy

script:   https://www.biwascheme.org/release/biwascheme-0.8.0-min.js

@BiwaScheme.eval
<script>
// window.console = console

BiwaScheme.Console.puts = function(str, x){ console.stream(str + (x ? '\n' : '')) }

var biwa = new BiwaScheme.Interpreter(console.error)
biwa.evaluate(`@input`, function(result) {
  if (result && result != "#<undef>") {
    console.debug(result)
  }
});
"LIA: stop"
</script>
@end


@BiwaScheme.evalWithTerminal
<script>
// window.console = console

BiwaScheme.Console.puts = function(str, x){ console.stream(str + (x ? '\n' : '')) }

var biwa = new BiwaScheme.Interpreter(console.error)

setTimeout(function() {
  biwa.evaluate(`@input`, function(result) {
    if (result && result != "#<undef>") {
      console.debug(result)
    }
  });
}, 100)

send.handle("input", input => {
  try{
    biwa.evaluate(input, function(result) {
      if (result && result != "#<undef>") {
        console.debug(result)
      }
    })
  } catch (e) {
    console.error(e);
  }
})

send.handle("stop", e => { console.log("execution stopped") })

"LIA: terminal"
</script>

@end
-->

# Umwandlung in Binärcode

Um die Umwandlung von menschenlesbarem zu maschinenlesbarem Code zu veranschaulichen, stellen wir Ihnen hier beispielhaft einen Binärcode-Konverter für Text gemäß dem Zeichenkodierungsschema American Standard Code for Information Interchange (8 Bit) zur Verfügung.

ToDo:
===
Lassen Sie sich zunächst den im Binärcode kodierten Text mit Klick auf 'Umwandeln' anzeigen, um näheres über den Standard zu erfahren. Spielen Sie mit dem Beispielcode oder erzeugen Sie eigene Übersetzungen. Finden Sie z. B. heraus, wie Zeilenumbrüche oder Leerzeichen kodiert sind?

<script>
function convertBinaryToASCII() {
    var binaryInput = document.getElementById("binaryInput").value;

    //console.log(binaryInput);
    
    let asciiText = "";

    binaryInput.split(" ").forEach(function(binary) {
        var paddedBinary = binary.padStart(8, '0');

        //console.log(paddedBinary);
        
        var decimalValue = parseInt(paddedBinary, 2);
        
        asciiText += String.fromCharCode(decimalValue);

        //console.log(asciiText);
    });

        document.getElementById("result").textContent = asciiText;
}

function clearInput() {
    //document.getElementById("binaryInput").value = "";
        
    document.getElementById("result").textContent = "";
}
</script>

<strong><label for="binaryInput">Eingabe Binärcode</label></strong>

<textarea id="binaryInput" name="binaryInput" rows="10" cols="80" required="">01000010 01100101 01101001 00100000 01100100 01100101 01110010 00100000 01000001 01010011 01000011 01001001 01001001 00101101 01011010 01100101 01101001 01100011 01101000 01100101 01101110 01100011 01101111 01100100 01101001 01100101 01110010 01110101 01101110 01100111 00100000 01110111 01101001 01110010 01100100 00100000 01100101 01101001 01101110 01100101 00100000 01110011 01110000 01100101 01111010 01101001 01100101 01101100 01101100 01100101 00100000 01011010 01100101 01101001 01100011 01101000 01100101 01101110 01110100 01100001 01100010 01100101 01101100 01101100 01100101 00100000 01110110 01100101 01110010 01110111 01100101 01101110 01100100 01100101 01110100 00101100 00100000 01100100 01101001 01100101 00100000 01101001 01101110 01101110 01100101 01110010 01101000 01100001 01101100 01100010 00100000 01100100 01100101 01110011 00100000 01000010 01100101 01110100 01110010 01101001 01100101 01100010 01110011 01110011 01111001 01110011 01110100 01100101 01101101 01110011 00100000 01100100 01100101 01110011 00100000 01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 01110011 00100000 01101001 01101110 01110100 01100101 01100111 01110010 01101001 01100101 01110010 01110100 00100000 01101001 01110011 01110100 00100000 01110101 01101110 01100100 00100000 01101010 01100101 01100100 01100101 01101101 00100000 01100100 01110010 01110101 01100011 01101011 01100010 01100001 01110010 01100101 01101110 00100000 01011010 01100101 01101001 01100011 01101000 01100101 01101110 00100000 00101000 01000010 01110101 01100011 01101000 01110011 01110100 01100001 01100010 01100101 00101100 00100000 01011010 01100001 01101000 01101100 00101100 00100000 01010011 01100001 01110100 01111010 01111010 01100101 01101001 01100011 01101000 01100101 01101110 00101001 00100000 01110011 01101111 01110111 01101001 01100101 00100000 01010011 01110100 01100101 01110101 01100101 01110010 01111010 01100101 01101001 01100011 01101000 01100101 01101110 00100000 00101000 01011010 01100101 01101001 01101100 01100101 01101110 01110101 01101101 01100010 01110010 01110101 01100011 01101000 00101100 00100000 01010100 01100001 01100010 01110101 01101100 01100001 01110100 01101111 01110010 00101001 00100000 01100101 01101001 01101110 01100101 01101110 00100000 01101110 01110101 01101101 01100101 01110010 01101001 01110011 01100011 01101000 01100101 00100000 01010111 01100101 01110010 01110100 00100000 01101001 01101110 00100000 01000010 01101001 01101110 11100100 01110010 01100110 01101111 01110010 01101101 00100000 01111010 01110101 01101111 01110010 01100100 01101110 01100101 01110100 00101110 00100000 01010111 01100101 01101110 01101110 00100000 01010100 01100101 01111000 01110100 00100000 11111100 01100010 01100101 01110010 00100000 01100101 01101001 01101110 01100101 00100000 01010100 01100001 01110011 01110100 01100001 01110100 01110101 01110010 00100000 01101111 01100100 01100101 01110010 00100000 01100101 01101001 01101110 00100000 01100001 01101110 01100100 01100101 01110010 01100101 01110011 00100000 01000101 01101001 01101110 01100111 01100001 01100010 01100101 01100111 01100101 01110010 11100100 01110100 00100000 01100101 01101001 01101110 01100111 01100101 01100111 01100101 01100010 01100101 01101110 00100000 01110111 01101001 01110010 01100100 00101100 00100000 01110111 01101001 01100101 00100000 01111010 00101110 00100000 01000010 00101110 00100000 01100100 01100101 01110010 00100000 01000010 01110101 01100011 01101000 01110011 01110100 01100001 01100010 01100101 01101110 00100000 00011010 01000011 00011000 00101100 00100000 01100101 01101110 01110100 01110011 01110000 01110010 01101001 01100011 01101000 01110100 00100000 01100100 01101001 01100101 01110011 01100101 01110010 00100000 01000010 01110101 01100011 01101000 01110011 01110100 01100001 01100010 01100101 00100000 01100101 01101001 01101110 01100101 01101101 00100000 01100010 01100101 01110011 01110100 01101001 01101101 01101101 01110100 01100101 01101110 00100000 01010111 01100101 01110010 01110100 00100000 01101001 01101110 00100000 01100100 01100101 01110010 00100000 01011010 01100101 01101001 01100011 01101000 01100101 01101110 01110100 01100001 01100010 01100101 01101100 01101100 01100101 00101110 00100000 01001001 01101110 00100000 01100111 01100101 01100111 01100101 01100010 01100101 01101110 01100101 01101110 00100000 01000010 01100101 01101001 01110011 01110000 01101001 01100101 01101100 00100000 01110011 01110100 01100101 01101000 01110100 00100000 00011010 01000011 00011000 00100000 01100110 11111100 01110010 00100000 01100100 01101001 01100101 00100000 01000100 01100101 01111010 01101001 01101101 01100001 01101100 01111010 01100001 01101000 01101100 00100000 00110110 00110111 00100000 01101111 01100100 01100101 01110010 00100000 01100100 01100101 01101110 00100000 00111000 00101101 01000010 01101001 01110100 00101101 01000010 01101001 01101110 11100100 01110010 01110111 01100101 01110010 01110100 00100000 00110000 00110001 00110000 00110000 00110000 00110000 00110001 00110001 00100000 01101001 01101110 00100000 01000001 01010011 01000011 01001001 01001001 00101110 00100000 01000100 01101001 01100101 00100000 01010011 01101111 01100110 01110100 01110111 01100001 01110010 01100101 00101100 00100000 01100100 01101001 01100101 00100000 01100100 01101001 01100101 00100000 01010100 01100001 01110011 01110100 01100001 01110100 01110101 01110010 01100101 01101001 01101110 01100111 01100001 01100010 01100101 01101110 00100000 01100101 01110010 01100110 01100001 01110011 01110011 01110100 00101100 00100000 11111100 01100010 01100101 01110010 01110011 01100101 01110100 01111010 01110100 00100000 01101010 01100101 01100100 01100101 01110011 00100000 01011010 01100101 01101001 01100011 01101000 01100101 01101110 00100000 01101001 01101110 00100000 01110011 01100101 01101001 01101110 01100101 01101110 00100000 01100101 01101110 01110100 01110011 01110000 01110010 01100101 01100011 01101000 01100101 01101110 01100100 01100101 01101110 00100000 01000001 01010011 01000011 01001001 01001001 00101101 01000010 01101001 01101110 11100100 01110010 01110111 01100101 01110010 01110100 00101110 00100000 01000100 01100101 01110010 00100000 01100101 01101110 01110100 01110011 01110100 01100101 01101000 01100101 01101110 01100100 01100101 00100000 01000010 01101001 01101110 11100100 01110010 01100011 01101111 01100100 01100101 00100000 01110111 01101001 01110010 01100100 00100000 01101001 01101101 00100000 01000001 01110010 01100010 01100101 01101001 01110100 01110011 01110011 01110000 01100101 01101001 01100011 01101000 01100101 01110010 00100000 00101000 01010010 01000001 01001101 00101001 00100000 01100100 01100101 01110011 00100000 01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 01110011 00100000 01100111 01100101 01110011 01110000 01100101 01101001 01100011 01101000 01100101 01110010 01110100 00100000 01110101 01101110 01100100 00100000 01101011 01100001 01101110 01101110 00100000 01110110 01101111 01101110 00100000 01100100 01100101 01110010 00100000 01000011 01010000 01010101 00100000 00101000 01000011 01100101 01101110 01110100 01110010 01100001 01101100 00100000 01010000 01110010 01101111 01100011 01100101 01110011 01110011 01101001 01101110 01100111 00100000 01010101 01101110 01101001 01110100 00101001 00100000 01110110 01100101 01110010 01100001 01110010 01100010 01100101 01101001 01110100 01100101 01110100 00100000 01110111 01100101 01110010 01100100 01100101 01101110 00101110 00100000</textarea>

<br>

<button type="button" onclick="convertBinaryToASCII()">Umwandeln</button>
<button type="button" onclick="clearInput()">Eingabe löschen</button>

<strong><label>Ausgabe</label></strong>
<br>

<div id="result" style="border: 1px solid #000; padding: 10px;">
</div>

<br>
    
Generieren Sie hier selbst eine Ausgabe in Binärcode. <br>

<script>
function convertTextToBinary() {

    var textInput = document.getElementById("textInput").value;

    let binaryCode = "";

    for (let i = 0; i < textInput.length; i++) {
        var charCode = textInput.charCodeAt(i);
        var binaryChar = charCode.toString(2).padStart(8, '0');
        binaryCode += binaryChar + " ";
    }

    document.getElementById("binaryResult").textContent = binaryCode;
}
</script>

<strong><label for="textInput">Eingabe Text</label></strong>

<br>

<textarea id="textInput" name="textInput" rows="5" cols="80" required="" data-lt-tmp-id="lt-650923" spellcheck="false" data-gramm="false" data-initial-value="" style="height: 50%"></textarea>

<br>

<button type="button" onclick="convertTextToBinary()">Umwandeln</button>

<br>

<strong><label>Ausgabe</label></strong>

<div id="binaryResult" style="border: 1px solid #000; padding: 10px;"></div>