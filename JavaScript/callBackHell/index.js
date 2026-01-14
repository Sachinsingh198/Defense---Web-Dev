// zomato application

const orderDetail = {
    orderId: 123123,
    food : ["Pizze", "biryani", "coke"], 
    cost : 233,
    customer_name: "Sachin singh", 
    customer_location: "Gopeshwar",
    restaurent_location: "Chamoli",
}

function placedOrder(orderDetail, Callback){
    console.log(`${orderDetail.cost} Payment is in Progress...`);

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
        Callback(orderDetail);
    }, 3000);
}



function preparingOrder(orderDetail, Callback){
    console.log(`Your ${orderDetail.food} preparation started...`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail);
    }, 3000)
}

function pickupOrder(orderDetail, Callback){
    console.log(`Delivery boy is on his way to pickup order from ${orderDetail.restaurent_location}`);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.recieved = true;
        Callback(orderDetail);
    }, 3000);
}

function deleiverOrder(orderDetail){
    console.log(`I am on my way to deliever order to ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Order is delivered successfully.");
        orderDetail.delieveryStatus = true;
        
    }, 3000)
}




placedOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deleiverOrder(orderDetail);
        });
    });
});

