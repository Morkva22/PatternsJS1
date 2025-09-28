const coffeeModule = new CoffeeModule();
const decoratedAddOrder = logDecorator(coffeeModule.addOrder.bind(coffeeModule));
const oldPrinter = new OldPrinter();
const printerAdapter = new PrinterAdapter(oldPrinter);

function createCoffee() {
    const type = document.getElementById('coffeeType').value;
    const size = document.getElementById('coffeeSize').value;
    const addMilk = document.getElementById('addMilk').checked;
    const addCinnamon = document.getElementById('addCinnamon').checked;

    let coffee = CoffeeFactory.createCoffee(type, size);

    if (addMilk) {
        coffee = milkDecorator(coffee);
    }
    if (addCinnamon) {
        coffee = cinnamonDecorator(coffee);
    }

    decoratedAddOrder(coffee);
}

function printOrders() {
    const orders = coffeeModule.getOrders();
    if (orders.length === 0) {
        printerAdapter.print("No orders to print");
    } else {
        const ordersList = orders.map((order, index) =>
            `Order #${index + 1}: ${order.description} (${order.size})`
        ).join('\n');
        printerAdapter.print(`All Orders:\n${ordersList}`);
    }
}

function clearOrders() {
    coffeeModule.clearOrders();
}

const espresso = CoffeeFactory.createCoffee('espresso', 'small');
const latte = CoffeeFactory.createCoffee('latte', 'large');

setTimeout(() => {
    decoratedAddOrder(espresso);
    setTimeout(() => decoratedAddOrder(latte), 1000);
}, 2000);