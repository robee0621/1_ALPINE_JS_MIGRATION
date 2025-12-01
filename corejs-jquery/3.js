function updateGrandTotal() {
    var total = 0;
    
    $('.subtotal').each(function() {
        var value = parseFloat($(this).text());
        if(!isNaN(value)) {
            total += value;
        }
    });
    
    $('#grandTotal').text(total.toFixed(2));
}
