const toggle = document.getElementById("togglebutton");
const clear = document.getElementById("clearbutton");
const enter = document.getElementById("input1");
const BTT = document.getElementById("submitbutton");
const list = document.getElementById("listing");


const forms = document.getElementById("addform");
let counter = 1;


forms.addEventListener("submit", handleFormSubmit);



function handleFormSubmit(event) {
    event.preventDefault();
    // const entername = document.getElementById("input1");
    createNewListItem(enter.value);
    enter.value = '';
}


function createNewListItem(enter1){
    
    // const entername = document.getElementById("input1");
    // addentertolist(entername.value);
    // const list = document.getElementById("listing");

    const nameinput = document.createElement("li");
    
    nameinput.id = enter1.id;
    nameinput.innerText = enter.value;
    
    
    list.appendChild(nameinput);
    // document.body.append(list);

    // nameinput.addEventListener("click", strike);
   
    nameinput.addEventListener("click", function() {
        nameinput.style.textDecoration = "line-through";
    });


}
//COULDN'T GET THE CLEAR LIST TO WORK, NOT SURE WHAT I MISSED
clear.addEventListener("click", () => {
    // const n2r = event.target.listing;
    const n2r = document.getElementById("nameinput");
// const liToRemove = event.target.li;
    // n2r.remove();

    list.removeChild("nameinput");
});




toggle.addEventListener("click", () => {
    document.body.classList.toggle("color");
})

