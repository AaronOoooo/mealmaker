const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    return this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    return this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set dessert(desserts) {
    return this._courses.desserts = desserts;
  },
  get courses() {
    //This is the shortcut 
    return _courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: courseName,
      dish: dishName,
      price: dishPrice,
    };
      return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      //Math.floor(Math.random() * 10); 
      const randomDish = Math.floor(Math.random() * dishes.length);
      return dishes[randomDish];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.dish}, ${mains.dish}, ${desserts.dish}. The total price of your meal is: $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'bread', 2.00);
menu.addDishToCourse('appetizers', 'applesauce', 1.50);

menu.addDishToCourse('mains', 'steak', 24.00);
menu.addDishToCourse('mains', 'asparagus', 11.00);
menu.addDishToCourse('mains', 'salmon', 21.25);

menu.addDishToCourse('desserts', 'peach cobbler', 12.00);
menu.addDishToCourse('desserts', 'ice cream', 11.00);
menu.addDishToCourse('desserts', 'sundae', 12.00);

const meal = menu.generateRandomMeal();
console.log(meal);

