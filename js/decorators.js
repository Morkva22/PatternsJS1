function logDecorator(fn) {
    return function(...args) {
        const result = fn.apply(this, args);
        return result;
    };
}

function milkDecorator(coffee) {
    return {
        ...coffee,
        description: `${coffee.description} with Milk`,
        hasMilk: true
    };
}

function cinnamonDecorator(coffee) {
    return {
        ...coffee,
        description: `${coffee.description} with Cinnamon`,
        hasCinnamon: true
    };
}