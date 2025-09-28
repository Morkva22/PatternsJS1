class CoffeeModule {
    constructor() {
        if (CoffeeModule.instance) {
            return CoffeeModule.instance;
        }
        this.orders = [];
        CoffeeModule.instance = this;
    }

    addOrder(order) {
        this.orders.push(order);
        this.updateUI();
        return order;
    }

    getOrders() {
        return this.orders;
    }

    clearOrders() {
        this.orders = [];
        this.updateUI();
    }

    updateUI() {
        const ordersList = document.getElementById('ordersList');
        if (this.orders.length === 0) {
            ordersList.innerHTML = '<p style="color: #888; text-align: center;">No orders yet</p>';
        } else {
            ordersList.innerHTML = this.orders.map((order, index) =>
                `<div class="order-item">
                    <strong>#${index + 1}</strong> - ${order.description || order.type} 
                    <span style="color: #d4af37;">(${order.size})</span>
                </div>`
            ).join('');
        }
    }
}