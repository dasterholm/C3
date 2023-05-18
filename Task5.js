// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.plugged = false;
  }

  plugIn() {
    console.log("Прибор '" + this.name + "' включен в розетку.");
    this.plugged = true;
  }
  
  unplug() {
    console.log("Прибор '" + this.name + "' выключен из розетки.");
    this.plugged = false;
  }
}

class TableLamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.plugged = true;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.plugged = false;
  }
}

const tableLamp = new TableLamp("Настольная лампа", "Philips", 20, "LED");

const notebook = new Computer("Ноутбук", "MSI", 150, "Игровой ноутбук");

tableLamp.unplug();
notebook.plugIn();

console.log(notebook)
console.log(tableLamp)
