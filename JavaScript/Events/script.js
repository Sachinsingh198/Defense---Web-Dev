
// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is coming soon";
// }

// const element = document.getElementById("first");

// element.onclick = function handleClick(){
//     element.textContent = "Strike is coming soon!"; 
// }

// element.onclick = function handleClick(){
//     element.textContent = "I am the best!";
// }

// element.addEventListener('dblclick', ()=>{
//     element.textContent = "Strike is coming soon!"; 
// })

// element.addEventListener('mouseenter', ()=>{
//     element.style.backgroundColor = "wheat"; 
// })

// const child1 = document.getElementById("child1");

// child1.addEventListener('click', ()=>{
//     child1.textContent = "I am clicked";
// })


// const parent = document.getElementById("parent");

// for(let child of parent.children){
//     child.addEventListener('click', ()=>{
//         child.textContent = "I am clicked!";
//     })
// }


const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click', (e)=>{
    console.log(e.target);
    // console.log("GrandParent is clicked!");
})

const parent = document.getElementById("parent");
parent.addEventListener('click', (e)=>{
    // console.log(e)
    // e.stopPropagation();
})

const child = document.getElementById("child");
child.addEventListener('click', (e)=>{
    // console.log(e)
    // e.stopPropagation();
})

