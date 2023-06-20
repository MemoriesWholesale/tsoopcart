import { v4 as uuidv4 } from "uuid";

class Item{
    private readonly _id: string;
    public get id(): string {
        return this._id;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _price: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }


    constructor(id:string=uuidv4(),name:string,price:number,description:string){
        this._id = id
        this._name = name;
        this._price = price;
        this._description = description
    }
}

class User{
    private readonly _id: string;
    public get id(): string {
        return this._id;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _age: number;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    private _cart: Item[];
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }


    constructor(id:string=uuidv4(),name:string,age:number,cart:Item[]){
        this._id = id
        this._name = name;
        this._age = age;
        this._cart = cart
    }

    addToCart(item:Item):void{
        this._cart.push(item)
    }

    removeFromCart(item:Item):void{
        this._cart = this._cart.filter((i)=>item.id !== i.id)
    }

    removeQuantityFromCart(item:Item,quantity:number){
        let count = this._cart.filter((i)=>item.id == i.id).length
        this.removeFromCart(item)
        for (let i = count-quantity; i > 0; i-- ){
            this.addToCart(item)
        }
    }

    cartTotal():number{
        return this._cart.map((x)=>(x.price)).reduce((x,y)=>(x+y))
    }

    printCart():void{
        for(let item of this._cart){
            console.log(item.name)
        }
    }
}

class Shop{
    private _stock: Item[];
    public get stock(): Item[] {
        return this._stock;
    }
    public set stock(value: Item[]) {
        this._stock = value;
    }
    constructor(itemA:Item,itemB:Item,itemC:Item){
        this._stock = [itemA,itemB,itemC]
    }
    
}

const itemA = new Item(uuidv4(),'lollipop',4,'licky licky')
const itemB = new Item(uuidv4(),'gummy worm',2,'creepy crawlie')
const itemC = new Item(uuidv4(),'laffy taffy',5,'sticky icky')

const CandyLand = new Shop(itemA,itemB,itemC)

const Charlie = new User(uuidv4(),'Charlie',11,[])

Charlie.addToCart(CandyLand.stock[0])
Charlie.printCart()
console.log(Charlie.cartTotal())
Charlie.addToCart(CandyLand.stock[1])
Charlie.addToCart(CandyLand.stock[1])
Charlie.addToCart(CandyLand.stock[1])
Charlie.addToCart(CandyLand.stock[1])
Charlie.addToCart(CandyLand.stock[1])
Charlie.printCart()
console.log(Charlie.cartTotal())
Charlie.addToCart(CandyLand.stock[2])
Charlie.addToCart(CandyLand.stock[2])
Charlie.addToCart(CandyLand.stock[2])
Charlie.printCart()
console.log(Charlie.cartTotal())
Charlie.removeFromCart(CandyLand.stock[2])
Charlie.printCart()
console.log(Charlie.cartTotal())
Charlie.removeQuantityFromCart(CandyLand.stock[1],3)
Charlie.printCart()
console.log(Charlie.cartTotal())
