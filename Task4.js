// Задание 4
// Реализовать следующее консольное приложение. 
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую 
// мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log("Прибор '" + this.name + "' включен в розетку.");
    this.plugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log("Прибор '" + this.name + "' выключен из розетки.");
    this.plugged = false;
};

function TableLamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.plugged = true;
}

TableLamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.plugged = false;
}

Computer.prototype = new ElectricalAppliance();

const tableLamp = new TableLamp("Настольная лампа", "Philips", 20, "LED");

const notebook = new Computer("Ноутбук", "MSI", 150, "Игровой ноутбук");

tableLamp.unplug();
notebook.plugIn();

console.log(notebook)
console.log(tableLamp)
