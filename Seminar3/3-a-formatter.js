//Exemplu
const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + i + "}") !== -1) {
      modified = modified.replace("{" + i + "}", format[i]);
    }
  }
  return modified;
};

console.log(
  formatString("this is a {0} string  and we've {1} it ", "nice", "modified")
);

//Exercitiu
const formatString2 = (s, parameters) => {
  let modified = s;
  for (let key in parameters) {
    if (modified.indexOf("{" + key + "}") !== -1) {
      modified = modified.replace("{" + key + "}", parameters[key]);
    }
  }
  return modified;
};

console.log(
  formatString2("un {substantiv} este {adjectiv}", {
    substantiv: "căluț",
    adjectiv: "drăguț",
  })
);
