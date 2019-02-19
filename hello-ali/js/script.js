const cartWrapper= document.querySelector(".cart__wrapper"),/*Корзина*/
      cart =document.querySelector(".cart"),/*Корзина*/
      close = document.querySelector(".cart__close"),/*Крестик закрыть*/
      open = document.querySelector("#cart"),/*Открыть*/
      goodsBtn = document.querySelectorAll(".goods__btn"),/*Все кнопки*/
      products = document.querySelectorAll(".goods__item"),/*Карточки*/
      confirm = document.querySelector(".confirm"),
      badge = document.querySelector(".nav__bsdge"),/*Информация корзины*/
      totalCost = document.querySelector(".cart__total > span"),/*стоимость*/
      titles = document.querySelectorAll(".goods_title");

open.addEventListener("click",openCart);/* Открыват  корзину*/  
close.addEventListener("click",closeCart);/*Закрывает корзину*/  

function openCart(){
/* Открыват  корзину*/  
    cart.style.display="block";
    document.body.style.overflow="hidden";/*!отменят прокрутку страници*/
}

function closeCart(){
    /*Закрывает корзину*/  
    cart.style.display="none";
    document.body.style.overflow="";
}

/* цикл обращатся ко все кнопкам и пр нажатии на любой происходит событие*/
goodsBtn.forEach(function(btn, i){
    btn.addEventListener("click", () =>{
        let item = products[i].cloneNode(true),/*Кланируем карточку товара*/
            trigger = item.querySelector("button"),/* Обращаемся к элемнту button*/
            removeBtn = document.createElement("div"),/* создать блок*/
            empty = cartWrapper.querySelector(".empty");/* В блоке cartWrapper обращаемся классу empty*/

            trigger.remove();/*удаляем кнопку (добавить в корзину)*/

            removeBtn.classList.add("goods__item-remove");/*Добавляем  к div класс */
            removeBtn.innerHTML ="&times";/*создаем символ X*/
            item.appendChild(removeBtn);/*Добовляем дочерний элемент*/

            cartWrapper.appendChild(item); /*Добовляем дочерний элемент*/

            /*проверяем есть что нибудь empty (лож или правда)*/
            if(empty){
            /*Удаляем текст корзина пуста*/
                empty.remove();
            }
    });

});

