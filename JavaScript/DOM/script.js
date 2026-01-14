const newElement = document.createElement("h2");
newElement.textContent = "Strike is Coming soon";
newElement.id = 'second';

const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Happy Diwali";
newElement2.id = 'third';
// newElement2.className = "diwali";
// newElement2.className += " holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("holi");
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";
newElement2.setAttribute("hello", "ji");

element.before(newElement2);
// element.after(newElement2);

console.log(newElement2.getAttribute("hello"));


// const list = document.createElement("li");
// list.textContent = "Milk";
// list.style.color = "brown";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";


// const unorderedElement = document.getElementById("listing");

// unorderedElement.append(list, list2);
// unorderedElement.prepend(list3);

// // list.after(list4);

// unorderedElement.children[1].after(list4);


const arr = ["Milk", "Cake", "Halwa", "Paneer"];

const unorderedElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderedElement.append(list);
// }


// Best Practice
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unorderedElement.append(fragment);


const s1 = document.getElementById("first");
s1.remove();

const month = document.getElementById("ten");

// console.log(month.childNodes);

const lister = document.createElement("li");
lister.textContent = "Help";


// month.insertAdjacentElement("afterbegin", lister);