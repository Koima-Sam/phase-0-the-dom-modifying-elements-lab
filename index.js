// Write your code here!
//no longer has DOM node 'main#main'
const main = document.querySelector("main");
main.remove();
//has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement('h1');
newHeader.id = "victory";
//has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.textContent = "SAMMY KOIMA is the champion";