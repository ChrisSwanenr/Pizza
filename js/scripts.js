function Pizza(pizzaSize, cheese) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.meatToppings = [];
}
pizza.prototype.addMeat = function(meat) {
  this.meatToppings.push(meat);
}
pizza.prototype.cost = function() {
  var cost = 0;
  if (this.pizzaSize === "small") {
    cost = 7;
  } else if (this.pizzaSize === "medium") {
    cost = 9;
  } else if (this.pizzaSize === "large") {
    cost = 12;
  } else if (this.pizzaSize === "extra large") {
    cost = 13;
  }
}
  this.meatToppings.forEach(function(){
    cost += 2;
  }):
  if (this.cheese === "extra") {
    cost += 1;
  }
  this.cost = cost;
}
function Order (customerName, customerAddress, customerPhone, customerCashCredit) {
  this.customerName = customerName;
  this.customerAddress = customerAddress;
  this.customerPhone = customerPhone;
  this.customerCashCredit = customerCashCredit;
  this.pizzas = [];
}
Order.prototype.addPizza = function(pizza) {
  pizza.cost();
  this.pizzas.push(pizza);
}
Order.prototype.findTotal = function() {
  var totalCost = 0;
  this.pizzas.forEach(function(pizza) {
    totalCost += pizza.cost;
  });
  this.totalCost = totalCost;
}
