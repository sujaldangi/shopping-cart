var popup_shop_value = localStorage.getItem('popup_shop_value');
if (popup_shop_value === null) {
    popup_shop_value = 0;
} else {
    popup_shop_value = parseInt(popup_shop_value);
}
const list_product_check = [];
const div_product_list = document.getElementById("cart_items");
function onLoad() {
    var popup_shop = document.getElementById('popup');
    popup_shop.innerHTML = popup_shop_value;
}
function buy_product_display(name,price,quantity) {
    var popup_shop = document.getElementById('popup');
    var popup_shop_value = popup_shop.textContent.trim();
    var popup_shop_value = Number(popup_shop_value);
    if (list_product_check.includes(name) == false) {
        list_product_check.push(name);
        popup_shop_value = popup_shop_value + 1;
        popup_shop.innerHTML = popup_shop_value;
        localStorage.setItem('popup_shop_value', popup_shop_value);
     
        const ul_product_list = document.createElement('ul');
        ul_product_list.classList.add('list-group', 'list-group-flush');
        
        const li_product_list = document.createElement('ul');
        li_product_list.classList.add("list-group-item");
        li_product_list.id = name;
        li_product_list.textContent = name+" ----- "+price+" ----- Quantity = "+quantity;
        ul_product_list.appendChild(li_product_list);
        div_product_list.appendChild(ul_product_list);   
    }
    else {
        var change_in_quantity = document.getElementById(name);
        // Extract the current quantity from the textContent
        var quantityText = change_in_quantity.textContent.split(" = ")[1].trim();
        // Convert the quantity from string to number
        var currentQuantity = parseInt(quantityText);
    
        var updatedQuantity = currentQuantity + quantity;
 
        change_in_quantity.textContent = name + " ----- " + price + " ----- Quantity = " + updatedQuantity;
    }
    
}