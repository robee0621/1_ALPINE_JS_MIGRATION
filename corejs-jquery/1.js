$('#addBtn').on('click', function() {
    var productName = $('#productSelect').val();
    var price = $('#productSelect').find(':selected').data('price');
    
    var newRow = `
        <tr>
            <td class="p-name">${productName}</td>
            <td class="p-price">${price}</td>
            <td><input type="number" class="qty" value="1"></td>
            <td class="subtotal">${price}</td>
            <td><button class="removeBtn">Remove</button></td>
        </tr>
    `;
    
    $('#orderTable tbody').append(newRow);
    updateGrandTotal(); // Call helper function
});
