const dataObject = {
    monthly:{
        'middle':{
            type:"Professional",
            price:"24.99",
            storage:"1 TB Storage",
            users:"5 Users Allowed",
            send:"Send up to 10 GB"
        },
        'right':{
            type:"Basic",
            price:"19.99",
            storage:"500 GB Storage",
            users:"2 Users Allowed",
            send:"Send up to 3 GB"
        },
        'left':{
            type:"Master",
            price:"39.99",
            storage:"2 TB Storage",
            users:"10 Users Allowed",
            send:"Send up to 20 GB"
        }
    },
    yearly:{
        'middle':{
            type:"Professional",
            price:"249.99",
            storage:"1 TB Storage",
            users:"5 Users Allowed",
            send:"Send up to 10 GB"
        },
        'right':{
            type:"Basic",
            price:"199.99",
            storage:"500 GB Storage",
            users:"2 Users Allowed",
            send:"Send up to 3 GB"
        },
        'left':{
            type:"Master",
            price:"399.99",
            storage:"2 TB Storage",
            users:"10 Users Allowed",
            send:"Send up to 20 GB"
        }
    }
};
const checkbox = document.querySelector('[type="checkbox"]');
const types = document.querySelectorAll('[data-type="type"]');
const prices = document.querySelectorAll('[data-price="price"]');
const storage = document.querySelectorAll('[data-storage="storage"]');
const users = document.querySelectorAll('[data-users="users"]');
const send   = document.querySelectorAll('[data-send="send"]');
const cards = document.querySelectorAll('.card');



function checkFollow(){


    // checked===monthly
    if(checkbox.checked === true){
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains("right")){
                types[i].textContent=dataObject.monthly.right.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.monthly.right.price}`;
                storage[i].textContent=dataObject.monthly.right.storage;
                users[i].textContent=dataObject.monthly.right.users;
                send[i].textContent=dataObject.monthly.right.send;
            }
            if(cards[i].classList.contains("left")){
                types[i].textContent=dataObject.monthly.left.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.monthly.left.price}`;
                storage[i].textContent=dataObject.monthly.left.storage;
                users[i].textContent=dataObject.monthly.left.users;
                send[i].textContent=dataObject.monthly.left.send;
            }
            if(cards[i].classList.contains("middle")){
                types[i].textContent=dataObject.monthly.middle.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.monthly.middle.price}`;
                storage[i].textContent=dataObject.monthly.middle.storage;
                users[i].textContent=dataObject.monthly.middle.users;
                send[i].textContent=dataObject.monthly.middle.send;
            }
        }
    }

        // checked===yearly
    if(checkbox.checked !== true){
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains("right")){
                types[i].textContent=dataObject.yearly.right.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.yearly.right.price}`;
                storage[i].textContent=dataObject.yearly.right.storage;
                users[i].textContent=dataObject.yearly.right.users;
                send[i].textContent=dataObject.yearly.right.send;
            }
            if(cards[i].classList.contains("left")){
                types[i].textContent=dataObject.yearly.left.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.yearly.left.price}`;
                storage[i].textContent=dataObject.yearly.left.storage;
                users[i].textContent=dataObject.yearly.left.users;
                send[i].textContent=dataObject.yearly.left.send;
            }
            if(cards[i].classList.contains("middle")){
                types[i].textContent=dataObject.yearly.middle.type;
                prices[i].innerHTML=`<span>&dollar;</span>${dataObject.yearly.middle.price}`;
                storage[i].textContent=dataObject.yearly.middle.storage;
                users[i].textContent=dataObject.yearly.middle.users;
                send[i].textContent=dataObject.yearly.middle.send;
            }
        }
    }
}
checkFollow();
checkbox.addEventListener("click",checkFollow)