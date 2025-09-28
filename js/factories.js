class CoffeeFactory {
    static createCoffee(type, size) {
        const coffee = {
            type: type,
            size: size,
            description: `${type.charAt(0).toUpperCase() + type.slice(1)} Coffee`
        };
        return coffee;
    }
}