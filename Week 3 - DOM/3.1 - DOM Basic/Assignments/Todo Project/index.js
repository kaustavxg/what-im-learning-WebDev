let ctr = 1;
function deleteTodo(index) {
    // find the element by its id
    const element = document.getElementById(index);
    // remove the element from its parent (the body)
    element.parentNode.removeChild(element);
}

function addTodo() {
    // get the input element and extractss the value
    const Ele = document.querySelector("input");
    const ExtractedValue = Ele.value;

    // create a new div element and set its id to the current value of ctr
    const newDivEle = document.createElement("div");
    newDivEle.setAttribute("id", ctr);

    // set the innerHTML of the new div element to the extracted value and a delete button
    newDivEle.innerHTML = "<div>" + ExtractedValue + "</div> <button onclick='deleteTodo(" + ctr + ")'> Delete </button>"

    // appendChild the new div element to the body of the document
    document.querySelector("body").appendChild(newDivEle);
    ctr += 1;
}