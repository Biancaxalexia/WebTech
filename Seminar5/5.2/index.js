//Exemplu
let crypto = require("crypto-js");

let word1 = "word1";

let encode = crypto.AES.encrypt(
  JSON.stringify(word1),
  "secret key 123"
).toString();

console.log(encode);

let bytes = crypto.AES.decrypt(encode, "secret key 123");

let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decrypt);

//Exercitiu
const fs = require("fs");

fs.mkdir("folderNou", (err) => {
  if (err) return console.error("Nu am putut crea folderul:", err);
  console.log("Am creat folderul cu succes!");

  const caleFisier = "./folderNou/mesaj.txt";
  const continut = "Salut! Acesta este un fișier de test";

  fs.writeFile(caleFisier, continut, (err) => {
    if (err) return console.error("Nu am putut crea fișierul:", err);
    console.log("Fișierul a fost creat cu succes în folderul nostru!");

    fs.rm("folderNou", { recursive: true }, (err) => {
      if (err) return console.error("Nu am putut șterge folderul:", err);
      console.log("Folderul și fișierul său au fost șterse cu succes!");
    });
  });
});
