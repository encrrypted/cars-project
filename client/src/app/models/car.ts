export class Car {
    indexOf(searchText: any) {
      throw new Error('Method not implemented.');
    }

    _id: String = ''
    name: String;
    model: String;
    price: Number;
    image: String;

    constructor(name: String, model: String, price: Number, image: String) {
        this.name = name
        this.model = model
        this.price = price
        this.image = image
    }

    
}