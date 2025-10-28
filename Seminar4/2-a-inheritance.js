//Exemplu
class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const r0 = new Robot("some robot");
r0.move();

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

const w0 = new Weapon("pew pew laser");
w0.fire();

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapon(w) {
    this.weapons.push(w);
  }

  fire() {
    console.log("firing all weapons");
    for (const w of this.weapons) {
      w.fire();
    }
  }
}

const r1 = new CombatRobot("some combat robot");
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};

r1.fly();

//Exercitiu
class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} software is currently running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  install() {
    console.log(`${this.name} plugin is installing...`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(plugin) {
    this.plugins.push(plugin);
  }

  installPlugins() {
    console.log(`Installing plugins in ${this.name}...`);
    for (const plugin of this.plugins) {
      plugin.install();
    }
    console.log("All plugins were successfully installed!");
  }
}

const mySoftware = new Software("Programul meu");
mySoftware.run();

const plugin1 = new Plugin("Primul plugin");
const plugin2 = new Plugin("Al doilea plugin");

const chrome = new Browser("Chrome");
chrome.addPlugin(plugin1);
chrome.addPlugin(plugin2);

chrome.installPlugins();
