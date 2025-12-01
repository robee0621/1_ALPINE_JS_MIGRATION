<button 
    @click="orders.push({
        id: Date.now(), 
        name: selectedProduct, 
        price: selectedPrice, 
        qty: 1
    })"
>
    Add Item
</button>
