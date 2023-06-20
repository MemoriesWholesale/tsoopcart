"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    constructor(id = (0, uuid_1.v4)(), name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }
}
class User {
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    constructor(id = (0, uuid_1.v4)(), name, age, cart) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._cart = cart;
    }
    addToCart(item) {
        this._cart.push(item);
    }
    removeFromCart(item) {
        this._cart = this._cart.filter((i) => item.id !== i.id);
    }
    removeQuantityFromCart(item, quantity) {
        let count = this._cart.filter((i) => item.id == i.id).length;
        this.removeFromCart(item);
        for (let i = count - quantity; i > 0; i--) {
            this.addToCart(item);
        }
    }
    cartTotal() {
        return this._cart.map((x) => (x.price)).reduce((x, y) => (x + y));
    }
    printCart() {
        for (let item of this._cart) {
            console.log(item.name);
        }
    }
}
class Shop {
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    constructor(itemA, itemB, itemC) {
        this._stock = [itemA, itemB, itemC];
    }
}
const itemA = new Item((0, uuid_1.v4)(), 'lollipop', 4, 'licky licky');
const itemB = new Item((0, uuid_1.v4)(), 'gummy worm', 2, 'creepy crawlie');
const itemC = new Item((0, uuid_1.v4)(), 'laffy taffy', 5, 'sticky icky');
const CandyLand = new Shop(itemA, itemB, itemC);
const Charlie = new User((0, uuid_1.v4)(), 'Charlie', 11, []);
Charlie.addToCart(CandyLand.stock[0]);
Charlie.printCart();
console.log(Charlie.cartTotal());
Charlie.addToCart(CandyLand.stock[1]);
Charlie.addToCart(CandyLand.stock[1]);
Charlie.addToCart(CandyLand.stock[1]);
Charlie.addToCart(CandyLand.stock[1]);
Charlie.addToCart(CandyLand.stock[1]);
Charlie.printCart();
console.log(Charlie.cartTotal());
Charlie.addToCart(CandyLand.stock[2]);
Charlie.addToCart(CandyLand.stock[2]);
Charlie.addToCart(CandyLand.stock[2]);
Charlie.printCart();
console.log(Charlie.cartTotal());
Charlie.removeFromCart(CandyLand.stock[2]);
Charlie.printCart();
console.log(Charlie.cartTotal());
Charlie.removeQuantityFromCart(CandyLand.stock[1], 3);
Charlie.printCart();
console.log(Charlie.cartTotal());
