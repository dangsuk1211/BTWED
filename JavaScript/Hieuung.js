$(document).ready(function() {
    // Khi chuột hover vào một .product-item
    $(".product-item").hover(
        function() {
            // Tìm và thêm lớp 'hovered' vào h3 bên trong
            $(this).find("h3").addClass("hovered");
        },
        function() {
            // Khi chuột rời khỏi .product-item, loại bỏ lớp 'hovered' khỏi h3
            $(this).find("h3").removeClass("hovered");
        }
    );
});