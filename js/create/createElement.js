export default function createElement(type, divClass){
    let element = document.createElement(type);
    element.classList.add(divClass);
    return element;
}