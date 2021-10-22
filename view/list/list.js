export class List {
    constructor(){
        var p = document.createElement("p");
        p.textContent = "list of smth!";
        p.id="page";
        document.getElementById('root').appendChild(p);
    }
}