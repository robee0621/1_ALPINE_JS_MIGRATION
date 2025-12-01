$(document).on('click', '.removeBtn', function() {
    $(this).closest('tr').remove();
    
    updateGrandTotal();
});
