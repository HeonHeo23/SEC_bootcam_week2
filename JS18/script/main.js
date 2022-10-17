// Factory Function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  } 
}

const myPizza = pizzaFactory("small");
myPizza.bake();

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this._type = "ppeporoni";
    this.#size = pizzaSize;
    this._crust = "original";
    this._toppings = [];
  }
  get pizzaCrust() {
    return this._crust;
  }
  getCrust() {
    return this._crust;
  }
  set pizzaCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
  getToppings() {
    return this._toppings;
  }
  setToppings(topping) {
    this._toppings.push(topping);
  }
  bake () {
    console.log(
      `Baking a ${this.#size} ${this._crust} ${this._type} crust pizza.`
    );
  }
}

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.type = "supreme";
// myPizza.pizzaCrust = "thin";
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The works";
    
//   }
//   slice() {
//     console.log(
//       `Our ${this.type} ${this.size} pizza has 8 slices.`
//     )
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();