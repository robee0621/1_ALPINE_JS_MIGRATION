$(document).on('input', '.qty', function() {
    var quantity = $(this).val();
    var price = $(this).closest('tr').find('.p-price').text();
    
    var subtotal = quantity * parseFloat(price);
    
    $(this).closest('tr').find('.subtotal').text(subtotal.toFixed(2));
    
    updateGrandTotal();
});
